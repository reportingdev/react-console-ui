import React, { useState, useMemo } from 'react';
import {
  InformationCircleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';

export interface Log {
  type: 'info' | 'warning' | 'error' | 'success';
  message: string;
  details: string;
}

export type ConsoleUIProps = {
  logs: Log[];
};

const ConsoleUI: React.FC<ConsoleUIProps> = ({ logs }) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const compressedLogs = useMemo(() => {
    const newLogs: Array<Log & { count: number }> = [];
    let prevLog: Log | null = null;

    for (const log of logs) {
      if (prevLog && prevLog.message === log.message && prevLog.details === log.details) {
        newLogs[newLogs.length - 1].count += 1;
      } else {
        newLogs.push({ ...log, count: 1 });
      }
      prevLog = log;
    }
    return newLogs;
  }, [logs]);

  const toggleExpand = (index: number) => {
    if (expandedRow === index) {
      setExpandedRow(null);
    } else {
      setExpandedRow(index);
    }
  };


  const getTextColor = (logType = 'info') => {
    const textColorMapping: any = {
      info: 'text-gray-500',
      warning: 'text-yellow-500',
      error: 'text-red-500',
      success: 'text-green-500',
    };

    return textColorMapping[logType] ?? textColorMapping['info'];
  }
  const getBackgroundColor = (logType = 'info') => {
    const backgroundColorMapping: any = {
      info: 'bg-gray-100',
      warning: 'bg-yellow-100',
      error: 'bg-red-100',
      success: 'bg-green-100',
    };

    return backgroundColorMapping[logType] ?? backgroundColorMapping['info'];
  }

  return (
    <div className="bg-gray-100 rounded-md">
      <div className="divide-y divide-gray-200">
        {compressedLogs.map((log, index) => (
          <div
            key={index}
            className={`p-1 ${log.count > 1 ? 'cursor-pointer' : ''} ${getBackgroundColor(log.type)}`}
            onClick={log.count > 1 ? () => toggleExpand(index) : undefined}
          >
            <div className={`flex items-center justify-between`}>
              <div className="grid grid-cols-[auto,1fr,auto] items-start gap-2">
                {log.type === 'info' && <InformationCircleIcon className={`h-4 w-4 ${getTextColor(log.type)}`} />}
                {log.type === 'warning' && <ExclamationCircleIcon className={`h-4 w-4 ${getTextColor(log.type)}`} />}
                {log.type === 'success' && <CheckCircleIcon className={`h-4 w-4 ${getTextColor(log.type)}`} />}
                {log.type === 'error' && <XCircleIcon className={`h-4 w-4 ${getTextColor(log.type)}`} />}
                <div className={`text-xs ${getTextColor(log?.type)}`}>
                  <span>{log.message + (log?.details ? ": " : '') + log?.details}</span>
                </div>
              </div>
              {log.count > 1 && <div className={`${getTextColor(log.type)} rounded-full w-5 h-5 flex items-center justify-center text-xs`}>{log.count}</div>}
            </div>
            {expandedRow === index && (
              <div className="mt-1 text-xs">
                {Array.from({ length: log.count }, (_, i) => (
                  <div key={i} className="flex items-center mr-2 ml-6">
                    <span className={`${getTextColor(log.type)} text-xs`}>{"— " + log.message + ": " + log.details}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsoleUI;
