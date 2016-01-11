declare module Notion.Boron.Module.Carbon.Service {
    class ModalService {
        private $uibModal;
        private modalInstance;
        static $Inject: string[];
        constructor($uibModal: ng.ui.bootstrap.IModalService);
        show(template: string, controller: any, data: any, callback: (p: any) => void): void;
        close(result?: any): void;
        dismiss(): void;
    }
}

declare module Notion.Boron.Module.Carbon.Service {
  abstract class DataService {
    private $http: ng.IHttpService;
    private ncToastService: Carbon.Service.ToastService;
    private ncModalService: Carbon.Service.ModalService;
    private baseUrl: string;
    loading: boolean;
    constructor($http: ng.IHttpService, ncToastService: Carbon.Service.ToastService, ncModalService: Carbon.Service.ModalService, baseUrl: string);
    postCore<T>(url: string, data: any, callback: ng.IHttpPromiseCallback<T>): void;
  }
}
declare module Notion.Boron.Module.Carbon.Model {
  interface IApiModuleResponse<T> {
    status: string;
    message: string;
    result: T;
  }
}

declare module Notion.Boron.Module.Carbon.Model {
  class Option {
    key: string;
    value: any;
    selected: boolean;
    constructor(key: string, value: any, selected?: boolean);
  }
}

declare var toastr: any;
declare module Notion.Boron.Module.Carbon.Service {
    class ToastService {
        private options;
        error(message: string): void;
        info(message: string): void;
    }
}
declare module Notion.Boron.Module.Carbon.Model {
  interface User {
    email: string;
    firstName: string;
    guid: string;
    lastName: string;
    username: string;
    websites: Array<string>;
    authorRights: Array<AuthorRight>;
    rights: Array<string>;
  }

  interface AuthorRight {
    appliesToChildren: boolean;
    appliesToCurrent: boolean;
    contentGroupGuid: string;
    name: string;
  }
}