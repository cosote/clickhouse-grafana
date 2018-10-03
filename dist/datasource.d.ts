/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import AdhocCtrl from './adhoc';
import Mutex from './Mutex';
export declare class ClickHouseDatasource {
    private $q;
    private backendSrv;
    private templateSrv;
    type: string;
    name: string;
    supportMetrics: boolean;
    url: string;
    directUrl: string;
    basicAuth: any;
    withCredentials: any;
    usePOST: boolean;
    defaultDatabase: string;
    addCorsHeader: boolean;
    responseParser: any;
    adhocCtrl: AdhocCtrl;
    mutex: Mutex;
    /** @ngInject */
    constructor(instanceSettings: any, $q: any, backendSrv: any, templateSrv: any);
    _request(query: any): Promise<any>;
    query(options: any): any;
    annotationQuery(options: any): any;
    metricFindQuery(query: any, options?: any): any;
    testDatasource(): any;
    _seriesQuery(query: any): Promise<any>;
    targetContainsTemplate(target: any): any;
    getTagKeys(): any;
    getTagValues(options: any): Promise<any>;
}
