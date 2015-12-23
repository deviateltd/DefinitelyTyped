/// <reference path="../angularjs/angular.d.ts" />
declare module Notion.Boron.Module.Carbon.Content.Service {
    interface IDataService {
        options(optionsRequest: Model.IOptionsRequest, callback: ng.IHttpPromiseCallback<Array<Model.ISelectOption>>): void;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Controller {
    interface IEditController {
        validationErrors: Array<Model.IValidationError>;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Service {
    interface IGuidService {
        generate(): string;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface IOptionsRequest {
        style: string;
        metaField: string;
        metaFieldData: XMetaFieldData;
        contentSectionData: XContentSectionData;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface ISelectOption {
        key: string;
        strValue: string;
        intValue: number;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface IValidationError {
        fieldId: string;
        message: string;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface XAliasInfo {
        alias: string;
        systemAlias: boolean;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface XContentData {
        contentGroupGuid: string;
        deleted: Date;
        versions: Array<XContentVersionInfo>;
        aliases: Array<XAliasInfo>;
        template: string;
        maintainer: string;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface XContentFile {
        identifier: string;
        contentType: string;
        name: string;
        rank: number;
        size: number;
        height: number;
        width: number;
        category: string;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface XContentInfo {
        contentGuid: string;
        contentGroupGuid: string;
        starts: Date;
        ends: Date;
        created: Date;
        deleted: Date;
        title: string;
        audiences: Array<string>;
        parentGroupId: string;
        displayRank: number;
        template: string;
        maintainer: string;
        website: string;
        navigationStarts: Date;
        navigationEnds: Date;
        modified: Date;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface XContentSectionData {
        style: string;
        metaFields: Array<XMetaFieldData>;
        contentSectionGroupName: string;
        contentSectionGroupTypeName: string;
        guid: string;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface XContentVersionData extends XContentVersionInfo {
        contentSections: Array<XContentSectionData>;
        audiences: Array<number>;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface XContentVersionInfo {
        contentGroupGuid: string;
        contentGuid: string;
        title: string;
        created: Date;
        modified: Date;
        starts: Date;
        ends: Date;
        displayLink: boolean;
        maintainer: string;
        templateName: string;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface XMetaDataData {
        identifier: string;
        stringValue?: string;
        largeStringValue?: string;
        integerValue?: number;
        dateValue?: Date;
        file?: Array<XContentFile>;
    }
}
declare module Notion.Boron.Module.Carbon.Content.Model {
    interface XMetaFieldData {
        identifier: string;
        name: string;
        description: string;
        metaFieldTypeName: string;
        multiple: boolean;
        metaData: Array<XMetaDataData>;
        settings: string;
    }
}
