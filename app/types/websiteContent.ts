export interface WebsiteContent {
    site: {
        title: string;
    };
    banner: {
        heading: string;
    };
    intro: {
        heading: string;
        subheading: string;
        text: string;
    };
    tenSteps: {
        heading: string;
        subheading: string;
    };
    blogs: {
        title: string;
        text: string;
        authorImage: string;
        authorName: string;
        date: string;
    }[];
    // features: {
    //     title: string;
    //     list: {
    //         title: string;
    //         text: string;
    //         logo: string;
    //         backgroundImage: string;
    //     }[];
    // };
    consultation: {
        title: string;
        authorImage: string;
        authorName: string;
        text: string;
    };
    footer: {
        copyWrights: string;
        contactUs: string;
        contactNumber: string;
    };
    stepsImages: string[],
    testimonials: {
        text: string;
        authorName: string;
        authorImage: string;
        position: string;
    }[];
    steps: {
        title: string;
        header: string;
        additionalInfo?: {
            header: string;
            list: string[];
        } | any;
        footer: string;
        list: {
            heading: string;
            list: string[];
        }[];
    }[]
}