import MutexInterface from './MutexInterface';
declare class Mutex implements MutexInterface {
    isLocked(): boolean;
    acquire(): Promise<MutexInterface.Releaser>;
    runExclusive<T>(callback: MutexInterface.Worker<T>): Promise<T>;
    private _dispatchNext();
    private _queue;
    private _pending;
}
export default Mutex;