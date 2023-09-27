interface Log {
  type: 'info' | 'warning' | 'error' | 'success';
  message: string;
  details: string;
}

type ConsoleUIProps = {
  logs: Log[];
};