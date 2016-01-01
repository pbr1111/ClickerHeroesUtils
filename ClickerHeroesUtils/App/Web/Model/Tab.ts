module App.Web.Model {

    export interface ITab {
        Title: string;
        Active: boolean;
        TemplateUrl: string;
        OnPrevious?: () => void;
        OnNext?: () => boolean;
    }
}