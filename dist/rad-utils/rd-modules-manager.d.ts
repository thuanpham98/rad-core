import { RdManager, RdModule } from "../rad-cores";
export declare class RdModulesManager<T extends RdModule> extends RdManager<T> {
    private m;
    protected key: symbol;
    private static _instance;
    constructor();
    /**
     * use
     */
    use(m: T): RdModulesManager<T>;
    /**
     * remove
     */
    remove(name: string): RdModulesManager<T>;
    /**
     * getModule
     */
    get<T2 extends T>(name: string): T2 | undefined;
    /**
     * length
     */
    get length(): number;
    /**
     * clear
     */
    clear(): void;
}