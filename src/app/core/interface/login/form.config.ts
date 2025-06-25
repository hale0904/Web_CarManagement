export interface FormField {
    label: string;
    name: string;
    value: string;
    placeholder: string;
}

export interface FormConfig {
    home: string;
    linkHome: string;
    heading: string;
    fields: FormField[];
    info: string;
    btn: string;
    link: string;
    linkText: string;
}
