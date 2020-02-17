import {BehaviorSubject, Observable}    from 'rxjs';

export{}
export interface TitleCore               { title          : string;                 }
export interface OptionalTitleCore       { title?         : string;                 }
export interface NameCore                { name           : string;                 }
export interface IdCore                  { id             : string;                 }
export interface ShortDescriptionCore    { description    : string;                 }
export interface FeaturePhotoCore        { featurePhoto   : string;                 }
export interface ShortTextCore           { text           : string;                 }
export interface SequenceCore            { sequence       : number;                 }
export interface OptionalSequenceCore    { sequence?      : number;                 }
export interface StepCore                { step           : number;                 }
export interface ProductIdCore           { productId      : string;                 }
export interface PathCore                { path           : string;                 }
export interface ModelIdCore             { modelId        : string;                 }
export interface InstructionKeyCore      { key            : InstructionIndexItem[]; }
export interface GraphicPropertyListCore { properties?    : GraphicPropertyBase[];  }
export interface OptionalImageCore       { image?         : string;                 }
export interface UserNameCore            { username       : string;                 }
export interface PasswordCore            { password       : string;                 }
export interface UserIdCore              { userId         : string;                 }
export interface UserDataCore            { userData       : string;                 }
export interface ToolIdCore              { toolId         : string;                 }
export interface MaterialIdCore          { materialId     : string;                 }
export interface GalleryPhotoListCore    { photos?        : GalleryPhoto[];         }
export interface UserStatusCore          { userStatus     : string;                 }
export interface AccessKeyCore           { accessKey      : string;                 }
export interface DataIdCore              { dataId         : string;                 }
export interface InstructionTargetCore   { instructionKey : string;                 }




export interface SummaryCore            { summary: string; }


export interface LinkCore               { link: string; }
export interface ParagraphTextCore      { text: string[]; }
export interface PhotoCore              { photo: string; }


export interface AttributeCore          { attribute: string; }
export interface SettingCore            { setting: string; }
export interface ItemCore               { item: string; }
export interface LocationCore           { location: string; }





export interface ProductFeature extends TitleCore, IdCore, FeaturePhotoCore, ShortDescriptionCore{dataId: string;}

export interface ProductListItem extends ProductIdCore{ models?: ProductFeature[]; }



export const PRODUCTLIST: ProductFeature[] = [
    {
        title: 'Divider 01',
        id: 'divider_01_list_id',
        featurePhoto: 'photo_path_01',
        description: 'Some Description 01',
        dataId: 'divider_01'
    },
    {
        title: 'Divider 02',
        id: 'divider_02_list_id',
        featurePhoto: 'photo_path_02',
        description: 'Some Description 02',
        dataId: 'divider_02'
    },
    {
        title: 'Divider 03',
        id: 'divider_03_list_id',
        featurePhoto: 'photo_path_03',
        description: 'Some Description 03',
        dataId: 'divider_03'
    }
]




export interface InstructionParagraph extends ShortTextCore, SequenceCore{}

export interface InstructionText extends TitleCore, IdCore, StepCore{
    content: InstructionParagraph[];
}



export const INSTRUCTIONCORE: InstructionText[] = [
    {
        title: 'Title for step 01 for core A',
        id: 'core_01_a',
        step: 1,
        content: [
            {
                sequence: 1,
                text: 'first paragraph blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ]
    },
    {
        title: 'Title for step 02 for core A',
        id: 'core_02_a',
        step: 2,
        content: [
            {
                sequence: 1,
                text: 'first paragraph blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ]
    },
    {
        title: 'Title for step 03 for core A',
        id: 'core_03_a',
        step: 3,
        content: [
            {
                sequence: 1,
                text: 'first paragraph blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ]
    },
    {
        title: 'Title for step 04 for core A',
        id: 'core_04_a',
        step: 4,
        content: [
            {
                sequence: 1,
                text: 'first paragraph blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ]
    },
    {
        title: 'Title for step 01 for core B',
        id: 'core_01_b',
        step: 1,
        content: [
            {
                sequence: 1,
                text: 'first paragraph of alternate shit blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph of alternate shit blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph of alternate shit blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ]
    },
    {
        title: 'Title for step 02 for core B',
        id: 'core_02_b',
        step: 2,
        content: [
            {
                sequence: 1,
                text: 'first paragraph of alternate shit blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph of alternate shit blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph of alternate shit blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ]
    },
    {
        title: 'Title for step 05 for core A',
        id: 'core_05_a',
        step: 5,
        content: [
            {
                sequence: 1,
                text: 'first paragraph blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ]
    },
    {
        title: 'Title for step 06 for core A',
        id: 'core_06_a',
        step: 6,
        content: [
            {
                sequence: 1,
                text: 'first paragraph blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ]
    }
    
]







export interface UniqueInstructionText extends InstructionText, OptionalSequenceCore{ insert?: string; }



export const UNIQUEINSTRUCTIONS: InstructionText[] = [
    {
        title: 'Title for Unique Instruction 01',
        id: 'unique_instruction_01',
        step: 1,
        content: [
            {
                sequence: 1,
                text: 'first paragraph blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ]
    },
    {
        title: 'Title for Unique Instruction 02',
        id: 'unique_instruction_02',
        step: 2,
        content: [
            {
                sequence: 1,
                text: 'first paragraph blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ]
    },
    {
        title: 'Title for Unique Instruction 03',
        id: 'unique_instruction_03',
        step: 3,
        content: [
            {
                sequence: 1,
                text: 'first paragraph blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ],
    },
    {
        title: 'Title for Unique Instruction 04',
        id: 'unique_instruction_04',
        step: 4,
        content: [
            {
                sequence: 1,
                text: 'first paragraph blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ],
    },
    {
        title: 'Title for Unique Instruction 05',
        id: 'unique_instruction_05',
        step: 5,
        content: [
            {
                sequence: 1,
                text: 'first paragraph blahblahblah.'
            },
            {
                sequence: 2,
                text: 'second paragraph blahblahblah.'
            },
            {
                sequence: 3,
                text: 'third paragraph blahblahblah.'
            },
            {
                sequence: 4,
                text: 'you get the fucking picture....'
            }
        ],
    }
]







export interface InstructionIndexItem extends IdCore{ store: string; }

export interface ModelInstructionIndex extends ModelIdCore, InstructionKeyCore{}

export interface InstructionIndex extends ProductIdCore, InstructionKeyCore{
    modelKeys?: ModelInstructionIndex[];
}



/*export const PRODUCTINSTRUCTIONKEY: InstructionIndex[] = [
    {
        productId: 'divider_01',
        key: [
            {
                id: 'core_01_a',
                store: 'core'
            },
            {
                id: 'unique_instruction_03',
                store: 'unique'
            },
            {
                id: 'core_02_b',
                store: 'core'
            },
            {
                id: 'unique_instruction_05',
                store: 'unique'
            },
            {
                id: 'core_04_a',
                store: 'core'
            }
        ]
    },
    {
        productId: 'divider_02',
        key: [
            {
                id: 'core_01_b',
                store: 'core'
            },
            {
                id: 'core_04_a',
                store: 'core'
            },
            {
                id: 'unique_instruction_02',
                store: 'unique'
            },
            {
                id: 'core_03_a',
                store: 'core'
            },
            {
                id: 'unique_instruction_05',
                store: 'unique'
            }
        ]
    },
    {
        productId: 'divider_03',
        key: [
            {
                id: 'unique_instruction_03',
                store: 'unique'
            },
            {
                id: 'core_01_a',
                store: 'core'
            },
            {
                id: 'core_04_a',
                store: 'core'
            },
            {
                id: 'unique_instruction_02',
                store: 'unique'
            },
            {
                id: 'core_05_a',
                store: 'core'
            }
        ]
    },
    {
        productId: 'divider_04',
        key: [
            {
                id: 'unique_instruction_04',
                store: 'unique'
            },
            {
                id: 'core_05_a',
                store: 'core'
            },
            {
                id: 'core_03_a',
                store: 'core'
            },
            {
                id: 'unique_instruction_01',
                store: 'unique'
            },
            {
                id: 'core_02_b',
                store: 'core'
            }
        ]
    }
]*/







export interface ProductMeasurement{
    inches: string;
    centimeters: string;
}

export interface ProductSpecs{
    width?: ProductMeasurement;
    minWidth?: ProductMeasurement;
    maxWidth?: ProductMeasurement;
    height?: ProductMeasurement;
    minHeight?: ProductMeasurement;
    maxHeight?: ProductMeasurement;
    length?: ProductMeasurement;
    depth?: ProductMeasurement;
    thickness?: ProductMeasurement;
}

export interface ProductFeaturePhoto extends IdCore, TitleCore, PathCore{ cover?: boolean; }

export interface ProductIndexItem extends ModelIdCore, TitleCore, ShortDescriptionCore{
    photos: ProductFeaturePhoto[];
    specGraphics: string;
    specs: ProductSpecs;
    default?: boolean;
}


export interface ProductIndex extends ProductIdCore, TitleCore, ShortDescriptionCore, InstructionTargetCore{
    sizes: ProductIndexItem[];
}

export interface ProductNavItem extends PhotoCore, TitleCore, DataIdCore{}

export interface ProductFeatureView extends TitleCore, ShortDescriptionCore, InstructionTargetCore{
    photos: ProductFeaturePhoto[];
}



export const PRODUCTDATA: ProductIndex[] = [
        {
            productId: 'divider_01',
            title: 'Divider 01',
            description: 'A brief description for Divider 01',
            sizes: [
                {
                    modelId: 'divider_01_small_a',
                    title: 'Divider 01 small',
                    description: 'A brief description for the small divider',
                    photos: [
                        {
                            id: 'divider_01_small_pic_01',
                            title: 'Divider 01 small pic 01',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_01_small_pic_02',
                            title: 'Divider 01 small pic 02',
                            path: 'photo_path',
                            cover: true
                        },
                        {
                            id: 'divider_01_small_pic_03',
                            title: 'Divider 01 small pic 03',
                            path: 'photo_path'
                        }
                    ],
                    specGraphics: 'divider_01_small_a_spec_graphics',
                    specs: {
                        height: { inches: '3.2', centimeters: '8.128'},
                        minWidth: { inches: '.83', centimeters: '2.1082'},
                        maxWidth: { inches: '7.1', centimeters: '18.034'},
                        thickness: {inches: '.125', centimeters: '.3175'}
                    }
                },
                {
                    modelId: 'divider_01_medium',
                    title: 'Divider 01 medium',
                    description: 'A brief description for the medium divider',
                    photos: [
                        {
                            id: 'divider_01_medium_pic_01',
                            title: 'Divider 01 medium pic 01',
                            path: 'photo_path',
                            cover: true
                        },
                        {
                            id: 'divider_01_medium_pic_02',
                            title: 'Divider 01 medium pic 02',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_01_medium_pic_03',
                            title: 'Divider 01 medium pic 03',
                            path: 'photo_path'
                        }
                    ],
                    specGraphics: 'divider_01',
                    specs: {
                        height: {inches: '6.4', centimeters: '16.256'},
                        minWidth: {inches: '.83', centimeters: '2.1082'},
                        maxWidth: {inches: '12.2', centimeters: '30.988'},
                        thickness: {inches: '.125', centimeters: '.3175'}
                    },
                    default: true
                },
                {
                    modelId: 'divider_01_large_a',
                    title: 'Divider 01 large',
                    description: 'A brief description for the large divider',
                    photos: [
                        {
                            id: 'divider_01_large_pic_01',
                            title: 'Divider 01 large pic 01',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_01_large_pic_02',
                            title: 'Divider 01 large pic 02',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_01_large_pic_03',
                            title: 'Divider 01 large pic 03',
                            path: 'photo_path',
                            cover: true
                        }
                    ],
                    specGraphics: 'divider_01_large_a_spec_graphics',
                    specs: {
                        height: { inches: '10.75', centimeters: '27.305'},
                        minWidth: { inches: '.83', centimeters: '2.1082'},
                        maxWidth: { inches: '18.4', centimeters: '46.736'},
                        thickness: {inches: '.125', centimeters: '.3175'}
                    }
                }
            ],
            instructionKey: 'divider_01_instruction_key'
        },
        {
            productId: 'divider_02',
            title: 'Divider 02',
            description: 'A brief description for Divider 02',
            sizes: [
                {
                    modelId: 'divider_02_small_a',
                    title: 'Divider 02 small',
                    description: 'A brief description for the small divider',
                    photos: [
                        {
                            id: 'divider_02_small_pic_01',
                            title: 'Divider 02 small pic 01',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_02_small_pic_02',
                            title: 'Divider 02 small pic 02',
                            path: 'photo_path',
                            cover: true
                        },
                        {
                            id: 'divider_02_small_pic_03',
                            title: 'Divider 02 small pic 03',
                            path: 'photo_path'
                        }
                    ],
                    specGraphics: 'divider_02_small_a_spec_graphics',
                    specs: {
                        height: { inches: '3.2', centimeters: '8.128'},
                        minWidth: { inches: '.83', centimeters: '2.1082'},
                        maxWidth: { inches: '7.1', centimeters: '18.034'},
                        thickness: {inches: '.125', centimeters: '.3175'}
                    }
                },
                {
                    modelId: 'divider_02_medium_a',
                    title: 'Divider 02 medium',
                    description: 'A brief description for the medium divider',
                    photos: [
                        {
                            id: 'divider_02_medium_pic_01',
                            title: 'Divider 02 medium pic 01',
                            path: 'photo_path',
                            cover: true
                        },
                        {
                            id: 'divider_02_medium_pic_02',
                            title: 'Divider 02 medium pic 02',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_02_medium_pic_03',
                            title: 'Divider 02 medium pic 03',
                            path: 'photo_path'
                        }
                    ],
                    specGraphics: 'divider_02_medium_a_spec_graphics',
                    specs: {
                        height: { inches: '6.4', centimeters: '16.256'},
                        minWidth: { inches: '.83', centimeters: '2.1082'},
                        maxWidth: { inches: '12.2', centimeters: '30.988'},
                        thickness: {inches: '.125', centimeters: '.3175'}
                    },
                    default: true
                },
                {
                    modelId: 'divider_02_large_a',
                    title: 'Divider 02 large',
                    description: 'A brief description for the larger divider',
                    photos: [
                        {
                            id: 'divider_02_large_pic_01',
                            title: 'Divider 02 large pic 01',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_02_large_pic_02',
                            title: 'Divider 02 large pic 02',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_02_large_pic_03',
                            title: 'Divider 02 large pic 03',
                            path: 'photo_path',
                            cover: true
                        }
                    ],
                    specGraphics: 'divider_02_large_a_spec_graphics',
                    specs: {
                        height: { inches: '10.75', centimeters: '27.305'},
                        minWidth: { inches: '.83', centimeters: '2.1082'},
                        maxWidth: { inches: '18.4', centimeters: '46.736'},
                        thickness: {inches: '.125', centimeters: '.3175'}
                    }
                }
            ],
            instructionKey: 'divider_02_instruction_key'
        },
        {
            productId: 'divider_03',
            title: 'Divider 03',
            description: 'A brief description for Divider 03',
            sizes: [
                {
                    modelId: 'divider_03_small_a',
                    title: 'Divider 03 small',
                    description: 'A brief description for the small divider',
                    photos: [
                        {
                            id: 'divider_03_small_pic_01',
                            title: 'Divider 03 small pic 01',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_03_small_pic_02',
                            title: 'Divider 03 small pic 02',
                            path: 'photo_path',
                            cover: true
                        },
                        {
                            id: 'divider_03_small_pic_03',
                            title: 'Divider 03 small pic 03',
                            path: 'photo_path'
                        }
                    ],
                    specGraphics: 'divider_03_small_a_spec_graphics',
                    specs: {
                        height: { inches: '3.2', centimeters: '8.128'},
                        minWidth: { inches: '.83', centimeters: '2.1082'},
                        maxWidth: { inches: '7.1', centimeters: '18.034'},
                        thickness: {inches: '.125', centimeters: '.3175'}
                    }
                },
                {
                    modelId: 'divider_03_medium_a',
                    title: 'Divider 03 medium',
                    description: 'A brief description for the medium divider',
                    photos: [
                        {
                            id: 'divider_03_medium_pic_01',
                            title: 'Divider 03 medium pic 01',
                            path: 'photo_path',
                            cover: true
                        },
                        {
                            id: 'divider_03_medium_pic_02',
                            title: 'Divider 03 medium pic 02',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_03_medium_pic_03',
                            title: 'Divider 03 medium pic 03',
                            path: 'photo_path'
                        }
                    ],
                    specGraphics: 'divider_03_medium_a_spec_graphics',
                    specs: {
                        height: { inches: '6.4', centimeters: '16.256'},
                        minWidth: { inches: '.83', centimeters: '2.1082'},
                        maxWidth: { inches: '12.2', centimeters: '30.988'},
                        thickness: {inches: '.125', centimeters: '.3175'}
                    },
                    default: true
                },
                {
                    modelId: 'divider_03_large_a',
                    title: 'Divider 03 large',
                    description: 'A brief description for the large divider',
                    photos: [
                        {
                            id: 'divider_03_large_pic_01',
                            title: 'Divider 03 large pic 01',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_03_large_pic_02',
                            title: 'Divider 03 large pic 02',
                            path: 'photo_path'
                        },
                        {
                            id: 'divider_03_large_pic_03',
                            title: 'Divider 03 large pic 03',
                            path: 'photo_path',
                            cover: true
                        }
                    ],
                    specGraphics: 'divider_03_large_a_spec_graphics',
                    specs: {
                        height: { inches: '10.75', centimeters: '27.305'},
                        minWidth: { inches: '.83', centimeters: '2.1082'},
                        maxWidth: { inches: '18.4', centimeters: '46.736'},
                        thickness: {inches: '.125', centimeters: '.3175'}
                    }
                }
            ],
            instructionKey: 'divider_03_instruction_key'
        }
    ]






export interface ResponsiveScale{
    minWidth?: number;
    width?: number;
    maxWidth?: number;
    minHeight?: number;
    height?: number;
    maxHeight?: number;
}

export interface GraphicPropertyBase{
    property: string;
    setting: string;
    bind?: string;
}

export interface GraphicProperties{
    attributes?: GraphicPropertyBase[];
    styles?: GraphicPropertyBase[];
}

export interface ResponsiveProperties{
    scale:ResponsiveScale;
    properties: GraphicProperties;
}

export interface ViewBoxParameters{
    x: string;
    y: string;
    width: string;
    height: string;
}

export interface GraphicBinding{
    library: string;
    property: string;
}

export interface GraphicElement{
    element: string;
    elementId: string;
    selfClosing?: boolean;
    bind?: GraphicBinding;
    value?: string;
    properties: GraphicProperties;
    responsiveProperties?: ResponsiveProperties;
}

export class GraphicElementClass{
    element: string;
    elementId: string;
    selfClosing?: boolean;
    bind?: GraphicBinding;
    value?: string;
    properties: GraphicProperties;
    responsiveProperties?: ResponsiveProperties;
}

export type GroupOrElement = GraphicGroupElement | GraphicElement;

export interface GraphicGroupElement{
    groupId: string;
    element: string;
    objects: Array<GraphicGroupElement | GraphicElement>;
    coreProperties?: GraphicProperties;
}

export class GraphicGroupElementClass{
    groupId: string;
    element: string;
    objects: Array<GraphicGroupElement | GraphicElement>;
    coreProperties?: GraphicProperties;
}

export interface GraphicObject{
    id: string;
    viewBox: ViewBoxParameters;
    objects: Array<GraphicGroupElement | GraphicElement>;
}

export interface GraphicModelStore{
    modelId: string;
    graphics: GraphicObject[];
}

export interface GraphicStore{
    productId: string;
    data: GraphicModelStore[];
}

export const SPECGRAPHICS: GraphicStore[] = [
    {
        productId: 'divider_01',
        data: [
            {
                modelId: 'divider_01_medium',
                graphics: [
                    {
                        id: 'closed_specs',
                        viewBox: {
                            x: '0',
                            y: '0',
                            width: '243.3600006',
                            height: '771.8400269'
                        },
                        objects: [
                            {
                                groupId: 'width_dimension',
                                element: 'g',
                                objects: [
                                    {
                                        element: 'line',
                                        elementId: 'width_dimension_post_01',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '83.4799881'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '757.9199829'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '101.4799881'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '769.7199707'
                                                }
                                    ]
                                }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'width_dimension_post_02',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '127.1799698'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '737.1199951'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '145.0799561'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '749.1199951'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'width_extender',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '95.879982'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '766.0200195'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '139.4799805'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '745.4199829'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'width_arm',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: '139.4799805,745.4199829 201.6799622,715.8200073 219.6799622,715.8200073'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'width_arrow_left',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `95.8800125,766.0200195 102.5799942,761.2199707 103.7800064,763.8200073 95.8800125,766.0200195`
                                                },
                                                {
                                                    property: 'stroke',
                                                    setting: 'none'
                                                },
                                                {
                                                    property: 'fill',
                                                    setting: 'black'
                                                }
                                            ]
                                }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'width_arrow_right',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `139.4799805,745.4199829 132.7799988,750.1199951 131.5799866,747.5200195 139.4799805,745.4199829`
                                                },
                                                {
                                                    property: 'stroke',
                                                    setting: 'none'
                                                },
                                                {
                                                    property: 'fill',
                                                    setting: 'black'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'text',
                                        elementId: 'width_dimension_text',
                                        bind: {
                                            library: 'specMeasurements',
                                            property: 'minWidth'
                                        },
                                        properties: {
                                            attributes: [
                                                /*{
                                                    property: 'transform',
                                                    setting: `matrix(1.0003 0 0 1 219.7171021 720.2783813)`
                                                },*/
                                                {
                                                    property: 'x',
                                                    setting: '219.7171021'
                                                },
                                                {
                                                    property: 'y',
                                                    setting: '720.2783813'
                                                },
                                                {
                                                    property: 'class',
                                                    setting: `.svg-text`
                                                },
                                               /* {
                                                    property: 'transform',
                                                    setting: `matrix(1.3 0 0 1.3 219.7171021 720.2783813)`
                                                },*/
                                                {
                                                    property: 'fill',
                                                    setting: 'black'
                                                },
                                                {
                                                    property: 'stroke',
                                                    setting: 'none'
                                                }
                                            ]
                                        }
                                    }
                                ],
                                coreProperties:{
                                    attributes: [
                                        {
                                            property: 'stroke',
                                            setting: 'black'
                                        },
                                        {
                                            property: 'stroke-width',
                                            setting: '.66'
                                        },
                                        {
                                            property: 'fill',
                                            setting: 'none'
                                        }
                                    ]
                                }
                            },
                            {
                                groupId: 'height_dimension',
                                element: 'g',
                                objects: [
                                    {
                                        element: 'line',
                                        elementId: 'height_dimension_post_01',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '67.2799759'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '63.0199738'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '2.1799848'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '3.1200123'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'height_dimension_post_02_a',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '93.5799637'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '744.5200195'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '83.2477493'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '735.0130615'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'height_dimension_post_02_b',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '73.9409943'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '726.449707'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '28.4799881'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '684.6199951'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'height_extender_01',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '6.6799846'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '7.2199879'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '17.9799881'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '299.9200134'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'height_extender_02',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '32.9799881'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '688.7200317'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '18.5799789'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '314.2200012'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'height_arrow_top',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `6.6800151,7.2200489 8.4800034,15.0200367 5.580009,15.1200123 6.6800151,7.2200489`
                                                },
                                                {
                                                    property: 'stroke',
                                                    setting: 'none'
                                                },
                                                {
                                                    property: 'fill',
                                                    setting: 'black'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'height_arrow_bottom',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `32.9800034,688.7200317 31.2800064,681.0200195 34.1800003,680.9199829 32.9800034,688.7200317`
                                                },
                                                {
                                                    property: 'stroke',
                                                    setting: 'none'
                                                },
                                                {
                                                    property: 'fill',
                                                    setting: 'black'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'text',
                                        elementId: 'height_dimension_text',
                                        bind: {
                                            library: 'specMeasurements',
                                            property: 'height'
                                        },
                                        properties:{
                                            attributes: [
                                                /*{
                                                    property: 'transform',
                                                    setting: 'matrix(1.0003 0 0 1 3.3811719 311.5586853)'
                                                },*/
                                                /*{
                                                    property: 'transform',
                                                    setting: 'matrix(1.3 0 0 1.3 -66 311.5586853)'
                                                },*/
                                                {
                                                    property: 'x',
                                                    setting: '-11'
                                                },
                                                {
                                                    property: 'y',
                                                    setting: '311.5586853'
                                                },
                                                {
                                                    property: 'class',
                                                    setting: `.svg-text`
                                                },
                                                {
                                                    property: 'stroke',
                                                    setting: 'none'
                                                },
                                                {
                                                    property: 'fill',
                                                    setting: 'black'
                                                }
                                            ]
                                        }
                                    }
                                ],
                                coreProperties:{
                                    attributes: [
                                        {
                                            property: 'stroke',
                                            setting: 'black'
                                        },
                                        {
                                            property: 'stroke-width',
                                            setting: '.66'
                                        },
                                        {
                                            property: 'fill',
                                            setting: 'none'
                                        }
                                    ]
                                }
                            },
                            {
                                groupId: 'support_arm',
                                element: 'g',
                                objects: [
                                    {
                                        element: 'line',
                                        elementId: 'support_arm_line_01',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '87.0799942'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '581.8199463'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '82.9799881'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '578.1199341'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'support_arm_line_02',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `82.379982,571.1199951 82.2800064,571.1199951 80.2800064,572.8199463 80.2800064,572.9199829`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'support_arm_line_03',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `55.9799881,324.519989 55.379982,326.4199829 55.1800003,328.6199951 55.5799942,330.7200012 56.4799881,332.4199829 57.1800003,333.1199951 59.5799942,335.3199768`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'support_arm_line_04',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `76.5799942,582.6199341 76.879982,583.6199341 77.7800064,585.3199463 78.379982,586.0199585 82.4799881,589.7199707 86.4799881,593.5199585`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'support_arm_line_05',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `59.4799881,329.8199768 59.4799881,330.1199951 59.2800064,332.6199951 64.379982,385.519989`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'support_arm_line_06',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '84.9799881'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '560.1199951'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '87.0799942'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '581.8199463'
                                                }
                                            ]
                                        }
                                    }
                                ],
                                coreProperties:{
                                    attributes: [
                                        {
                                            property: 'stroke',
                                            setting: 'black'
                                        },
                                        {
                                            property: 'stroke-width',
                                            setting: '.66'
                                        },
                                        {
                                            property: 'fill',
                                            setting: 'none'
                                        }
                                    ]
                                }
                            },
                            {
                                groupId: 'right_arm',
                                element: 'g',
                                objects: [
                                    {
                                        element: 'line',
                                        elementId: 'right_arm_line_01',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '112.879982'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '692.3199463'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '116.9799881'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '696.0199585'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'right_arm_line_02',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '111.379982'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '564.1199951'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '115.379982'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '567.8199463'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'right_arm_line_03',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '84.9799881'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '305.6199951'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '89.0799942'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '309.3200073'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'right_arm_line_04',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '60.5799942'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '124.4199982'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '62.0799942'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '125.8200226'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_05',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `104.5799942,601.9199829 112.879982,692.3199463 120.879982,731.9199829 124.879982,735.6199341`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_06',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `104.7800064,582.0199585 111.379982,564.1199951 103.4799881,551.9199829`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_07',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `78.1800003,321.019989 79.6800003,316.4199829 82.879982,309.519989 84.9799881,305.6199951 81.2800064,297.3200073`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'right_arm_line_08',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '98.1800003'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '187.4199982'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '102.2800064'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '191.1200104'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_09',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `75.1800003,211.219986 75.879982,203.5199738 		75.7800064,196.219986 75.0799942,189.5199738`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_10',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `62.379982,129.6200104 60.5799942,124.4199982 58.9799881,105.6200104`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_11',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `62.379982,129.6200104 60.5799942,124.4199982 58.9799881,105.6200104`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_12',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `72.2800064,62.0199738 68.1800003,58.3200226 68.0799942,58.219986 66.4799881,57.219986 64.4799881,56.8200226 62.2800064,56.9199982 59.9799881,57.6200104 57.879982,58.8200226 55.879982,60.5199738 54.1800003,62.5199738 52.9799881,64.8200226 52.2800064,67.1200104 52.1800003,69.3200226 52.5799942,71.3200226 53.5799942,73.0199738 54.0799942,73.6200104 56.4799881,75.8200226`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_13',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `79.0799942,67.3200226 74.9799881,63.719986 73.379982,62.3200226 69.7800064,60.719986 65.9799881,60.719986 64.4799881,61.219986 62.7800064,62.0199738 61.0799942,63.219986 59.5799942,64.5199738 58.379982,66.1200104 57.379982,67.9199982 56.6800003,69.719986 56.2800064,71.5199738 56.2800064,73.219986 56.7800064,79.6200104`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_14',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `108.879982,585.8199463 115.379982,567.8199463 103.4799881,549.3199463`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_15',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `103.4799881,378.2200012 115.5799942,541.9199829 128.8799744,563.1199951 117.5799942,593.9199829 125.879982,692.5199585 124.879982,735.6199341 116.9799881,696.0199585 107.9799881,599.2199707`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_16',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `77.879982,224.9199982 78.0799942,223.4199982 79.1800003,215.0199738 79.9799881,207.219986 79.879982,199.9199982 77.5799942,179.219986 76.1800003,171.3200226`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_17',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `81.9799881,325.4199829 83.6800003,320.1199951 86.9799881,313.2200012 89.0799942,309.3200073 83.7800064,297.519989 82.1800003,292.519989`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_18',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `81.879982,131.9199982 82.4799881,138.219986 84.0799942,148.3200226 86.0799942,158.1200104 88.5799942,167.219986 91.4799881,175.4199982 93.879982,180.9199982 96.5799942,185.4199982 99.2800064,188.9199982 102.2800064,191.1200104 98.7800064,197.1200104 95.7800064,204.219986 93.2800064,212.3200226 91.2800064,221.1200104 89.879982,231.0199738 89.2800064,241.4199982 89.379982,251.9199677 90.5799942,263.1199951 92.7800064,274.1199951 96.2800064,284.519989 100.9799881,294.019989 106.9799881,302.519989 102.7800064,313.9199829 100.0799942,321.1199951`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_19',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `86.9799881,79.719986 88.5799942,83.5199738 86.6800003,85.3200226 85.0799942,87.9199982 83.7800064,91.1200104 82.4799881,95.8200226`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_20',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `74.8611145,64.8875046 77.4799881,66.0199738 		80.9799881,69.3200226 82.379982,71.4199982`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'right_arm_line_21',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `82.5799942,310.1199951 81.2800064,310.6199951 79.0799942,311.8200073 77.6800003,313.019989`
                                                }
                                            ]
                                        }
                                    }
                                ],
                                coreProperties:{
                                    attributes: [
                                        {
                                            property: 'stroke',
                                            setting: 'black'
                                        },
                                        {
                                            property: 'stroke-width',
                                            setting: '.66'
                                        },
                                        {
                                            property: 'fill',
                                            setting: 'none'
                                        }
                                    ]
                                }
                            },
                            {
                                groupId: 'left_arm',
                                element: 'g',
                                objects: [
                                    {
                                        element: 'line',
                                        elementId: 'left_arm_line_01',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '76.2800064'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '715.4199829'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '72.1800003'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '711.7199707'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'left_arm_line_02',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '75.0799942'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '614.3199463'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '71.0799942'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '610.6199341'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'left_arm_line_03',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '61.2800064'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '592.4199829'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '57.2800064'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '588.7199707'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'left_arm_line_04',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '72.1800003'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '562.5199585'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '68.1800003'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '558.8199463'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'left_arm_line_05',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '67.379982'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '339.519989'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '63.2800064'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '335.8199768'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'left_arm_line_06',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '58.1800003'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '325.1199951'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '54.0799942'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '321.4199829'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'left_arm_line_07',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `52.6800003,214.4199982 55.7800064,218.5199738 58.9799881,224.6200104 61.6800003,231.719986 63.9799881,240.3200226 65.5799942,249.8199921 66.379982,260.1199951 66.2800064,271.8200073 65.1800003,284.019989 62.7800064,296.4199829 59.1800003,309.019989 54.0799942,321.4199829 59.2800064,329.519989 63.2800064,335.8199768 68.1800003,558.8199463 57.2800064,588.7199707 71.0799942,610.6199341 72.1800003,711.7199707 77.1800003,752.7199707 81.2800064,756.4199829`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'left_arm_line_08',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `52.379982,214.1200104 48.2800064,210.4199982 50.879982,206.219986 53.2800064,200.9199982 55.4799881,194.6200104 57.2800064,187.6200104 59.2800064,177.719986 60.7800064,167.219986 61.879982,156.3200226 62.4799881,145.4199982 62.5799942,132.9199982 61.879982,121.4199982 60.4799881,111.4199982 58.879982,105.4199982 56.879982,100.8200226`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'left_arm_line_09',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `80.2800064,69.5199738 76.2800064,65.8200226 75.4799881,65.219986 74.1800003,64.5199738 72.5799942,64.219986 70.879982,64.3200226 69.1800003,64.719986 67.6800003,65.3200226 63.9799881,67.9199982 60.5799942,72.0199738 57.4799881,77.719986 54.7800064,84.8200226 53.0799942,90.4199982 51.4799881,96.719986 55.4799881,100.5199738`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'left_arm_line_10',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `67.379982,339.7200012 72.1800003,562.5199585 61.2800064,592.4199829 75.0799942,614.3199463 76.2800064,715.4199829 81.2800064,756.4199829 85.2800064,712.5199585 84.879982,603.5199585 74.7800064,587.5199585 85.6800003,558.2199707 85.379982,347.519989`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'left_arm_line_11',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `84.5799942,330.1199951 84.5799942,329.9199829 82.2800064,325.8199768 78.5799942,321.4199829 76.0799942,319.1199951 80.0799942,304.019989 82.7800064,289.1199951 84.2800064,274.7200012 84.4799881,263.7200012 83.879982,253.3199921 82.5799942,244.1200104 80.7800064,235.8200226 78.7800064,228.4199982 76.879982,221.0199738 75.379982,214.0199738 74.7800064,206.9199982 75.0799942,185.3200226 76.5799942,164.6200104 79.1800003,145.219986 82.879982,126.719986 82.4799881,88.0199738`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'left_arm_line_12',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `73.1800003,68.4199982 71.6800003,69.0199738 67.9799881,71.6200104 64.6800003,75.719986 61.5799942,81.4199982 58.7800064,88.5199738 57.0799942,94.219986 55.4799881,100.5199738 57.4799881,100.9199982 59.2800064,102.3200226 60.879982,104.4199982 62.9799881,109.1200104 64.4799881,115.1200104 65.879982,125.1200104 66.5799942,136.6200104 66.4799881,149.1200104 65.879982,160.0199738 64.879982,170.9199982 63.2800064,181.4199982 61.379982,191.3200226 59.4799881,198.3200226 57.379982,204.6200104 54.9799881,209.9199982 52.379982,214.1200104 56.1800003,217.5199738 59.7800064,222.219986 62.9799881,228.3200226 65.6800003,235.5199738 67.9799881,244.0199738 69.5799942,253.6199799 70.379982,263.8200073 70.379982,275.519989 69.1800003,287.7200012 66.879982,300.2200012 63.1800003,312.7200012 58.1800003,325.1199951 63.2800064,333.2200012 67.379982,339.519989`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'left_arm_line_13',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `74.1800003,348.7200012 69.2800064,344.2200012 68.0799942,342.6199951 67.4799881,340.7200012 67.379982,338.519989 67.879982,336.2200012 68.879982,333.9199829 70.379982,331.8199768 72.2800064,330.019989 74.379982,328.6199951 76.6800003,327.7200012 78.879982,327.4199829 80.9799881,327.6199951 82.6800003,328.4199829 83.379982,328.9199829 88.9799881,334.2200012`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'left_arm_line_14',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `75.6800003,349.7200012 74.0799942,348.6199951 72.879982,347.1199951 72.2800064,345.2200012 72.2800064,343.019989 72.7800064,340.7200012 73.7800064,338.4199829 75.2800064,336.3199768 77.1800003,334.519989 79.2800064,333.1199951 81.4799881,332.2200012 83.7800064,331.8199768 85.7800064,332.1199951 87.5799942,332.9199829 88.9799881,334.2200012 89.7800064,335.9199829 90.1800003,338.019989 89.9799881,340.3199768 89.1800003,342.6199951 87.879982,344.8199768 86.1800003,346.8199768 84.1800003,348.4199829 81.9799881,349.6199951 79.7800064,350.2200012 77.5799942,350.2200012`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'left_arm_line_15',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `71.0799942,89.3200226 66.2800064,84.8200226 65.1800003,83.4199982 64.4799881,81.5199738 64.2800064,79.4199982 64.7800064,77.1200104 65.6800003,74.8200226 67.1800003,72.719986 68.9799881,70.8200226 71.0799942,69.3200226 73.2800064,68.4199982 75.4799881,67.9199982 77.5799942,68.1200104 79.4799881,68.8200226 80.2800064,69.5199738 85.1800003,74.0199738`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polygon',
                                        elementId: 'left_arm_line_16',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `69.9799881,87.9199982 69.2800064,86.0199738 69.1800003,83.9199982 69.5799942,81.6200104 70.5799942,79.3200226 71.9799881,77.1200104 73.7800064,75.3200226 75.879982,73.8200226 78.1800003,72.8200226 80.379982,72.4199982 82.4799881,72.6200104 84.2800064,73.3200226 85.7800064,74.5199738 86.6800003,76.219986 87.0799942,78.3200226 86.9799881,80.5199738 86.2800064,82.8200226 85.0799942,85.0199738 83.379982,87.1200104 81.4799881,88.719986 79.2800064,90.0199738 76.9799881,90.719986 74.7800064,90.8200226 72.879982,90.4199982 71.1800003,89.4199982`
                                                }
                                            ]
                                        }
                                    }
                                ],
                                coreProperties:{
                                    attributes: [
                                        {
                                            property: 'stroke',
                                            setting: 'black'
                                        },
                                        {
                                            property: 'stroke-width',
                                            setting: '.66'
                                        },
                                        {
                                            property: 'fill',
                                            setting: 'none'
                                        }
                                    ]
                                }
                            },
                            {
                                groupId: 'middle_arm',
                                element: 'g',
                                objects: [
                                    {
                                        element: 'line',
                                        elementId: 'middle_arm_line_01',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '94.4799881'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '708.9199829'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '90.4799881'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '705.2199707'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'middle_arm_line_02',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '91.5799942'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '584.9199829'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '87.4799881'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '581.2199707'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'middle_arm_line_03',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `87.7800064,594.7199707 90.4799881,705.2199707 95.379982,746.2199707 99.4799881,749.9199829`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'middle_arm_line_04',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `85.5799942,501.7200012 87.4799881,581.2199707 86.1800003,583.0199585 85.2800064,584.9199829 84.6800003,586.9199829 84.5799942,588.8199463 84.7800064,590.6199341 85.4799881,592.2199707 86.4799881,593.4199829 86.4799881,593.5199585 90.5799942,597.2199707`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'middle_arm_line_05',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `106.4799881,326.9199829 101.5799942,322.4199829 97.5799942,318.7200012 96.7800064,318.1199951 94.879982,317.3200073 92.6800003,317.2200012 90.379982,317.6199951 88.0799942,318.7200012 85.879982,320.2200012 84.0799942,322.2200012 82.6800003,324.519989 82.1800003,325.7200012`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'middle_arm_line_06',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `91.879982,598.4199829 94.4799881,708.9199829 99.4799881,749.9199829 103.4799881,706.0199585 103.4799881,602.4199829`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'middle_arm_line_07',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '103.4799881'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '581.1199341'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '103.4799881'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '341.1199951'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'middle_arm_line_08',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '85.879982'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '347.1199951'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '91.5799942'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '584.9199829'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'middle_arm_line_09',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `109.4799881,586.4199829 104.6800003,581.9199829 103.4799881,580.8199463`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'middle_arm_line_10',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `95.379982,601.7199707 90.5799942,597.2199707 90.1800003,596.8199463 89.1800003,595.1199341 88.6800003,593.2199707 88.6800003,590.9199829 89.379982,588.6199341 90.4799881,586.4199829 92.0799942,584.3199463 94.0799942,582.6199341 96.1800003,581.3199463 98.4799881,580.5199585 100.6800003,580.3199463 102.6800003,580.7199707 104.379982,581.6199341 104.6800003,581.9199829`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polygon',
                                        elementId: 'middle_arm_line_11',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `101.0799942,585.8199463 103.2800064,585.0199585 105.4799881,584.8199463 107.4799881,585.2199707 109.1800003,586.1199341 110.4799881,587.5199585 111.1800003,589.4199829 111.4799881,591.5199585 111.0799942,593.8199463 110.1800003,596.1199341 108.7800064,598.2199707 106.9799881,600.1199341 104.9799881,601.7199707 102.6800003,602.7199707 100.4799881,603.2199707 98.379982,603.1199341 96.4799881,602.4199829 94.9799881,601.3199463 93.9799881,599.6199341 93.4799881,597.6199341 93.5799942,595.4199829 94.1800003,593.1199341 95.379982,590.8199463 96.9799881,588.8199463 98.879982,587.1199341`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'middle_arm_line_12',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '89.9799881'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '340.019989'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '92.379982'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '342.2200012'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'middle_arm_line_13',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `101.5799942,322.4199829 100.7800064,321.8199768 98.9799881,321.1199951 96.7800064,320.9199829 94.4799881,321.3199768 92.0799942,322.4199829 89.9799881,324.019989 88.0799942,326.019989 86.6800003,328.2200012 85.879982,330.6199951 85.7800064,331.1199951`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polygon',
                                        elementId: 'middle_arm_line_14',
                                        selfClosing: true,
                                        properties:{
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `90.879982,340.019989 90.4799881,338.019989 90.5799942,335.8199768 91.2800064,333.519989 92.379982,331.2200012 94.0799942,329.2200012 95.9799881,327.519989 98.1800003,326.2200012 100.4799881,325.519989 102.5799942,325.4199829 104.5799942,325.8199768 106.2800064,326.7200012 107.4799881,328.2200012 108.1800003,330.1199951 108.379982,332.2200012 107.9799881,334.519989 107.0799942,336.8199768 105.5799942,338.9199829 103.7800064,340.8199768 101.6800003,342.3199768 99.4799881,343.3199768 97.2800064,343.8199768 95.1800003,343.6199951 93.2800064,342.9199829 91.879982,341.7200012`
                                                }
                                            ]
                                        }
                                    }
                                ],
                                coreProperties:{
                                    attributes: [
                                        {
                                            property: 'stroke',
                                            setting: 'black'
                                        },
                                        {
                                            property: 'stroke-width',
                                            setting: '.66'
                                        },
                                        {
                                            property: 'fill',
                                            setting: 'none'
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: 'open_specs',
                        viewBox:{
                            x: '0',
                            y: '0',
                            width: '784.7999878',
                            height: '90'
                        },
                        objects: [
                            {
                                groupId: 'open_width_dimension',
                                element: 'g',
                                objects: [
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_right_width_extender_post',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '776.7999878'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '78.3000183'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '411.9000244'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '76.6000061'
                                                }
                                    ]
                                }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_left_width_extender_post',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '4.7000184'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '74.8000183'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '375.3000183'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '76.5'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_right_width_post',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '776.7999878'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '44.5'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '776.7999878'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '87.3000183'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_left_width_post',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '4.7000184'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '41'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '4.7000184'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '83.8000183'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polygon',
                                        elementId: 'open_specs_right_arrow',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `776.7999878,78.2999878 770.4000244,79.7000122 770.4000244,76.7999878`
                                                },
                                                {
                                                    property: 'stroke',
                                                    setting: 'none'
                                                },
                                                {
                                                    property: 'fill',
                                                    setting: 'black'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polygon',
                                        elementId: 'open_specs_left_arrow',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `4.7000184,74.7999878 11.1000118,73.3999939 11.0000134,76.2999878`
                                                },
                                                {
                                                    property: 'stroke',
                                                    setting: 'none'
                                                },
                                                {
                                                    property: 'fill',
                                                    setting: 'black'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'text',
                                        elementId: 'open_specs_width_dimension_text',
                                        bind: {
                                            library: 'specMeasurements',
                                            property: 'maxWidth'
                                        },
                                        selfClosing: false,
                                        properties: {
                                            attributes: [
                                                /*{
                                                    property: 'transform',
                                                    setting: `matrix(1.0003 0 0 1 375.3977661 81.0547791)`
                                                },*/
                                                {
                                                    property: 'x',
                                                    setting: '375.3977661'
                                                },
                                                {
                                                    property: 'y',
                                                    setting: '94'
                                                },
                                                {
                                                    property: 'stroke',
                                                    setting: 'none'
                                                },
                                                {
                                                    property: 'fill',
                                                    setting: 'black'
                                                }
                                            ]
                                        }
                                    }
                                ],
                                coreProperties:{
                                    attributes: [
                                        {
                                            property: 'stroke',
                                            setting: 'black'
                                        },
                                        {
                                            property: 'stroke-width',
                                            setting: '.66'
                                        },
                                        {
                                            property: 'fill',
                                            setting: 'none'
                                        }
                                    ]
                                }
                            },
                            {
                                groupId: 'open_width_right_arm',
                                element: 'g',
                                objects: [
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_right_arm_line_01',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `392.8000183,11 393.2000122,10.6000061 396.8000183,8.3999939 403,6 403.6000061,7.6999817 404.6000061,9.1999817 406.1000061,10.5 409,12.2999878 412.7000122,13.6999817 418.6000061,15 425.1000061,15.7999878 432.2000122,16 440.2000122,15.6000061 448,14.5 455.1000061,12.6999817 459.8999939,10.7999878 463.7999878,8.5 466.5,5.7999878 470,10.1000061 474.8999939,13.8999939 480.7000122,17.1999817 488.7000122,20.1000061 497.5,21.6000061 505.7000122,21.7999878 514.1000366,20.5 522.2000122,17.6000061 530,12.8999939 535.4000244,17.2999878 539.6000366,20.6999817`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_right_arm_line_02',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `539.7000122,20.6999817 666.0999756,29.3999939 681.0999756,21.1000061 695.7000122,32.8999939 752.8999634,36 776.7999878,40.8999939 752.7000122,43.1999817 691.2000122,40.6000061 680.5999756,32 665.7999878,40.2999878 539.4000244,35.2999878`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_right_arm_line_03',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `530,12.8999939 534.1000366,12.8999939 539.5,17.2999878 543.7000122,20.6999817`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_right_arm_line_04',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '543.7000122'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '20.6999817'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '666.5999756'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '29.1999817'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_right_arm_line_05',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '543.7000122'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '20.6999817'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '539.6000366'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '20.6999817'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_right_arm_line_06',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `682.2999878,33.3999939 670,40.2999878 665.7999878,40.2999878`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_right_arm_line_07',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '699.7999878'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '32.7999878'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '695.7000122'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '32.8999939'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_right_arm_line_08',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '780.8999634'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '40.8999939'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '776.7999878'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '40.8999939'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_right_arm_line_09',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `681.0999756,21.1000061 685.2999878,21.1000061 699.7999878,32.7999878 757,35.8999939 780.8999634,40.8999939 756.8999634,43.1999817 752.7000122,43.1999817`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_right_arm_line_10',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '757'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '35.8999939'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '752.8999634'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '36'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_right_arm_line_11',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '543.7000122'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '20.6999817'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '543.5'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '20.6999817'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_right_arm_line_12',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `549.2999878,21.1000061 548.2999878,20.7999878 547.7000122,20.6999817 543.5,20.6999817`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_right_arm_line_13',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '535.5'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '35.2999878'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '539.6000366'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '35.2999878'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_right_arm_line_14',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `466.5,5.7999878 470.6000061,5.7999878 474.2000122,10.1000061 479,13.8999939 484.7999878,17.1999817 492.7999878,20`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_right_arm_line_15',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `457.1000061,23.8999939 454.7000122,24 436.2000122,26.2999878 433.1000061,27.1000061`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_right_arm_line_16',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `403,6 407.1000061,6 407.7000122,7.6999817 408.8000183,9.1999817 410.2000122,10.5 413.2000122,12.1999817 416.8999939,13.6999817 422.7000122,15`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_right_arm_line_17',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '412.5'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '28.3999939'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '392.8000183'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '27.2999878'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_right_arm_line_18',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `470,24.7999878 466.1000061,24 454,23.7999878 442.6000061,24.6000061 432.1000061,26.2999878 427.7999878,27.3999939`
                                                }
                                            ]
                                        }
                                    }
                                ],
                                coreProperties:{
                                    attributes: [
                                        {
                                            property: 'stroke',
                                            setting: 'black'
                                        },
                                        {
                                            property: 'stroke-width',
                                            setting: '.66'
                                        },
                                        {
                                            property: 'fill',
                                            setting: 'none'
                                        }
                                    ]
                                }
                            },
                            {
                                groupId: 'open_specs_support_arm',
                                element: 'g',
                                objects: [
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_support_arm_line_01',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `404.1000061,28.8999939 403.5,28.2999878 402.8999939,27.8999939`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_support_arm_line_02',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '246.1000061'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '34'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '310.2000122'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '36.2999878'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_support_arm_line_03',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '353.2000122'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '27'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '314.2000122'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '24.2999878'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_support_arm_line_04',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '351.7000122'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '26.6000061'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '315.8000183'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '24.1000061'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_support_arm_line_05',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '380.8000183'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '28.6999817'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '373.6000061'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '28.1999817'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_support_arm_line_06',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '380.6000061'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '29'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '371.0000305'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '28.29998781'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_support_arm_line_07',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `400.1000061,29.1999817 399.5,28.5 398.2000122,27.6000061`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_support_arm_line_08',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `396.8999939,41.8999939 397.7000122,41.7999878 399.3000183,41 400.6000061,39.5 400.7000122,39.1999817`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_support_arm_line_09',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `388.7000122,41.8999939 392.8000183,41.8999939 396.8999939,41.8999939 401,41.8999939 401.8999939,41.7999878 403.5,40.8999939 404.8000183,39.2999878 404.8999939,39.1000061`
                                                }
                                            ]
                                        }
                                    }
                                ],
                                coreProperties:{
                                    attributes: [
                                        {
                                            property: 'stroke',
                                            setting: 'black'
                                        },
                                        {
                                            property: 'stroke-width',
                                            setting: '.66'
                                        },
                                        {
                                            property: 'fill',
                                            setting: 'none'
                                        }
                                    ]
                                }
                            },
                            {
                                groupId: 'open_spec_middle_arm',
                                element: 'g',
                                objects: [
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_middle_arm_line_01',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `322.0000305,41.2999878 326.2000122,41.2999878 380.2000122,39.7999878`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_middle_arm_line_02',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `392.8000183,41.8999939 392.8999939,41.8999939 393.8999939,41.6999817 394.8999939,41.1999817 395.8000183,40.3999939 396.6000061,39.2999878`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_middle_arm_line_03',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `392.3999939,39.2999878 
		396.6000061,39.2999878 539.6000366,35.2999878 541.2999878,34.7999878 542.7999878,33.3999939 543.7999878,31.5 544.4000244,29.1000061 544.2999878,26.5 543.7000122,24.1999817 542.5,22.2999878 541,21.1000061 539.4000244,20.6999817 535.2999878,20.6999817`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_middle_arm_line_04',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '528.7999878'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '21.1000061'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '392.2000122'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '29.6999817'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_middle_arm_line_05',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '392.3999939'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '39.2999878'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '535.4000244'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '35.2999878'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_middle_arm_line_06',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `396.2000122,29.3999939 395.3999939,28.5 393.8999939,27.6000061 392.7000122,27.3999939 388.6000061,27.3999939`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_middle_arm_line_07',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `379.6000061,30.3999939 321.9000244,34 298.0000305,38.7999878 322.0000305,41.2999878 380.1000061,39.6999817`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_middle_arm_line_08',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `383.6000061,27.3999939 388.6000061,27.3999939 388.8999939,27.3999939 390.6000061,28 392,29.3999939 393,31.3999939 393.5,33.7999878 393.3999939,36.3999939 392.8000183,38.6999817 391.6000061,40.5 390,41.6000061 388.7000122,41.8999939 383.7000122,42`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polygon',
                                        elementId: 'open_specs_middle_arm_line_09',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `384,27.3999939 385.6000061,28 387.1000061,29.3999939 388.1000061,31.3999939 388.6000061,33.8999939 388.5,36.3999939 387.8000183,38.6999817 386.6000061,40.5 385.1000061,41.6999817 383.4000244,41.8999939 381.7000122,41.3999939 380.3000183,40 379.2000122,37.8999939 378.8000183,35.5 378.9000244,33 379.5000305,30.6999817 380.7000122,28.7999878 382.3000183,27.6999817`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_middle_arm_line_10',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `530.9000244,35.2999878 535.5,35.2999878 537.2000122,34.7999878 538.6000366,33.5 539.7000122,31.5 540.2000122,29.1000061 540.2000122,26.5 539.5,24.1999817 538.4000244,22.2999878 536.9000244,21.1000061 535.2999878,20.6999817 530.2999878,20.7999878`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polygon',
                                        elementId: 'open_specs_middle_arm_line_11',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `525.6000366,30 525.4000244,27.5 525.9000244,25.1000061 526.7999878,23 528.2000122,21.5 529.9000244,20.7999878 531.6000366,21 533.1000366,22 534.4000244,23.7999878 535.1000366,26.1000061 535.2999878,28.6000061 534.9000244,31 533.9000244,33.1000061 532.5,34.6000061 530.9000244,35.2999878 529.2000122,35.1000061 527.6000366,34.1000061 526.4000244,32.2999878`
                                                }
                                            ]
                                        }
                                    }
                                ],
                                coreProperties:{
                                    attributes: [
                                        {
                                            property: 'stroke',
                                            setting: 'black'
                                        },
                                        {
                                            property: 'stroke-width',
                                            setting: '.66'
                                        },
                                        {
                                            property: 'fill',
                                            setting: 'none'
                                        }
                                    ]
                                }
                            },
                            {
                                groupId: 'open_spec_left_arm',
                                element: 'g',
                                objects: [
                                    {
                                        element: 'line',
                                        elementId: 'open_specs_left_arm_line_01',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'x1',
                                                    setting: '90.2000198'
                                                },
                                                {
                                                    property: 'y1',
                                                    setting: '37.8999939'
                                                },
                                                {
                                                    property: 'x2',
                                                    setting: '94.400032'
                                                },
                                                {
                                                    property: 'y2',
                                                    setting: '37.8999939'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_left_arm_line_02',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `359.1000061,28.6999817 363.2000122,28.6999817 382.0000305,27.7999878`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_left_arm_line_03',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `281.7000122,32.1999817 285.8000183,32.1999817 293.6000061,31.1000061 300.5000305,29.1999817 306.6000061,26.8999939 313.2000122,24.5 319.4000244,23.3999939 320.052887,23.3615875`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_left_arm_line_04',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `115.6000137,37.8999939 119.8000259,37.8999939 246.2000122,34`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_left_arm_line_05',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `28.7000179,40 32.900032,40 94.400032,37.8999939 103.3000259,30.7999878`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_left_arm_line_06',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `391.8000183,27.3999939 392.8999939,27.2999878 393.8999939,27.1000061 394.8000183,26.6999817 395.6000061,26 396.3999939,25 397,23.8999939 397.3999939,22.6000061 397.6000061,21.1999817 397.7000122,19.7999878 397.6000061,18.6000061 396.7000122,15.6999817 395,13 392.3000183,10.6000061 388.7000122,8.3999939 382.5000305,5.8999939 378.4000244,5.8999939`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_left_arm_line_07',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `314.9000244,5.1999817 319.0000305,5.1999817 321.7000122,7.8999939 325.6000061,10.1999817 330.4000244,12.1000061 337.5000305,14 349.9000244,15.5 352.4000244,15.600006`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_left_arm_line_08',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `251.4000244,11.6999817 255.5,11.6999817 263.3000183,16.3999939 271.4000244,19.3999939`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_left_arm_line_09',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `100.3000259,18.5 104.5000076,18.5 119.1000137,26.6999817`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_left_arm_line_10',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `235.4000244,19.7999878 115.400032,27 100.3000259,18.5 85.8000259,30.1000061 28.6000423,32.6999817 4.7000184,37.3999939 28.7000179,40 90.2000198,37.8999939 100.900032,29.3999939 115.6000137,37.8999939 242,34`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_left_arm_line_11',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `387.6000061,27.3999939 388.8000183,27.2999878 389.8000183,27.1000061 390.7000122,26.6999817 391.5,26 392.2000122,25 392.8000183,23.8999939 393.3000183,22.6000061 393.5,21.2999878 393.6000061,19.7999878 393.5,18.6000061 392.6000061,15.6999817 390.8000183,13 388.2000122,10.6000061 384.6000061,8.3999939 378.4000244,5.8999939 377.8000183,7.6000061 376.7000122,9.1000061 375.3000183,10.3999939 372.3000183,12.1000061 368.6000061,13.5 362.8000183,14.7999878 356.2000122,15.5 349.2000122,15.6999817 341.1000061,15.1999817 333.3000183,14 326.3000183,12.1000061 321.5000305,10.1999817 317.6000061,7.8999939 314.9000244,5.1999817 311.3000183,9.3999939 306.5000305,13.1999817 300.7000122,16.3999939 292.7000122,19.1999817 283.9000244,20.6999817 275.6000061,20.6999817 267.3000183,19.3999939 259.1000061,16.3999939 251.4000244,11.6999817 246,16 241.8000183,19.3999939`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_left_arm_line_12',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `382.5000305,27.6000061 359.1000061,28.6999817 349.3000183,26 338.8000183,24.1999817 327.4000244,23.2999878 315.3000183,23.3999939 309.1000061,24.6000061 302.5000305,26.8999939 296.4000244,29.1999817 289.5,31.1999817 281.7000122,32.1999817 275.5,32.1999817 263.6000061,30.3999939 251.8000183,26.1999817 250.1000061,28.1999817 247.1000061,31.3999939 244.3000183,33.2999878 242.1000061,34 246.2000122,34 248.5,33.2999878 251.2000122,31.3999939 254.3000183,28.1999817 255,27.3999939`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_middle_arm_line_13',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `236.9000244,19.3999939 241.9000244,19.3999939 242,19.3999939 243.7000122,19.8999939 245.1000061,21.1999817 246.2000122,23.1000061 246.8000183,25.5 246.8000183,28.1000061 246.2000122,30.3999939 245.1000061,32.2999878 243.6000061,33.6000061 242,34 237,34`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polygon',
                                        elementId: 'open_specs_middle_arm_line_14',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `233.7000122,32.1999817 232.7000122,30.2999878 232.1000061,27.8999939 232.1000061,25.2999878 232.7000122,23 233.8000183,21.1000061 235.3000183,19.7999878 237,19.3999939 238.7000122,19.8999939 240.2000122,21.1999817 241.3000183,23.1999817 241.9000244,25.5 241.8000183,28.1000061 241.2000122,30.3999939 240.1000061,32.3999939 238.6000061,33.6000061 236.9000244,34 235.2000122,33.5`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polyline',
                                        elementId: 'open_specs_middle_arm_line_15',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `383.6000061,12.7999878 388.6000061,12.7999878 389.3000183,12.7999878 390.8999939,13.6000061 392.3000183,15.1000061 393.2000122,17.2999878 393.6000061,19.7999878 393.3000183,22.2999878 392.6000061,24.5 391.3000183,26.1999817 389.7000122,27.1999817 388.7000122,27.2999878`
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        element: 'polygon',
                                        elementId: 'open_specs_middle_arm_line_16',
                                        selfClosing: true,
                                        properties: {
                                            attributes: [
                                                {
                                                    property: 'points',
                                                    setting: `379.1000061,22.7999878 378.7000122,20.3999939 379.0000305,17.8999939 379.7000122,15.6000061 381.0000305,13.8999939 382.6000061,13 384.3000183,12.8999939 386,13.6000061 387.3000183,15.1999817 388.2000122,17.2999878 388.6000061,19.7999878 388.3999939,22.2999878 387.6000061,24.5 386.3000183,26.1999817 384.7000122,27.1999817 383.0000305,27.2999878 381.4000244,26.5 380.0000305,25`
                                                }
                                            ]
                                        }
                                    }
                                ],
                                coreProperties:{
                                    attributes: [
                                        {
                                            property: 'stroke',
                                            setting: 'black'
                                        },
                                        {
                                            property: 'stroke-width',
                                            setting: '.66'
                                        },
                                        {
                                            property: 'fill',
                                            setting: 'none'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
]



export interface GridMap{
    top: string;
    left: string;
    bottom: string;
    right: string;
}

export interface SpecGraphicMapItem{
    id: string;
    gridLocation: GridMap;
}

export interface SpecGraphicModelItem{
    modelId: string;
    graphicKeys: SpecGraphicMapItem[];
}

export interface SpecGraphicProductItem{
    productId: string;
    models: SpecGraphicModelItem[];
}

export interface SpecGraphicForge{
    id: string;
    gridLocation: GridMap;
    graphic: GraphicObject;
}



export const SPECGRAPHICKEY: SpecGraphicProductItem[] =[
    {
        productId: 'divider_01',
        models: [
            {
                modelId: 'divider_01_medium',
                graphicKeys: [
                    {
                        id: 'closed_specs',
                        gridLocation: {
                            top: '2',
                            left: '2',
                            bottom: '22',
                            right: '7'
                        }
                    },
                    {
                        id: 'open_specs',
                        gridLocation: {
                            top: '2',
                            left: '8',
                            bottom: '10',
                            right: '20'
                        }
                    }
                ]
            }
        ]
    }
]



export interface GraphicBindingProperty{ [property:string]: string; }
export interface GraphicBindingData{[library: string]: GraphicBindingProperty; }

export class GraphicBindingPropertyClass{ [property:string]: BehaviorSubject<string>; }
export class GraphicBindingDataClass{ [library:string]: BehaviorSubject<GraphicBindingProperty>; }



export interface BindingItem{ [property:string]:BehaviorSubject<string>; }
export interface BindingItemObservable{ [property:string]:Observable<string>; }

export interface BindingObject{ [library:string]:BindingItem; }
export interface BindingObjectObservable{ [library:string]:BindingItemObservable; }



/*export interface GraphicProperty{
    property: string;
    setting: string;
}

export interface GraphicElement extends GraphicPropertyListCore{
    element: string;
    selfClosing?: boolean;
}*/

export interface InstructionGraphic extends IdCore, GraphicPropertyListCore{
    //styles?: GraphicProperty[];
}

export interface InstructionGraphicKey extends OptionalSequenceCore{
    graphicId: string;
    gridLocation: string;
}

export interface InstructionPhoto extends IdCore, TitleCore, PathCore{ caption?: string; }

export interface GridLocation{
    minWidth: number;
    maxWidth: number;
    location: string;
}

export interface InstructionImageMap extends PathCore, OptionalSequenceCore{ gridLocation: GridLocation[]; }

export interface InstructionItem{
    step: number;
    textId: string;
    store: string;
    graphic?: InstructionImageMap;
    photo?: InstructionImageMap;
}

export interface InstructionObject extends ModelIdCore{ instructions: InstructionItem[]; }

export interface SupplyObject{
    status: string;
    quantity?: number;
    amount?: string;
    comment?: string;
}

export interface InstructionToolObject extends SupplyObject, ToolIdCore{}

export interface InstructionMaterialObject extends SupplyObject, MaterialIdCore{}

export interface MasterSupplyItem extends IdCore, NameCore, OptionalImageCore{}

export interface InstructionSupplyList{
    toolList: InstructionToolObject[];
    materialList: InstructionMaterialObject[];
}

export interface ProductInstruction extends ProductIdCore{
    supplyList: InstructionSupplyList;
    sizes: InstructionObject[];
}



export const MASTERTOOLLIST: MasterSupplyItem[] = [
    {
        id: 'xacto_01',
        name: 'X-Acto Knife'
    },
    {
        id: 'scissor_01',
        name: 'Scissors'
    },
    {
        id: 'metal_ruler_01',
        name: 'Metal Ruler'
    },
    {
        id: 'sand_block_01',
        name: 'Sanding Block'
    },
    {
        id: 'hole_punch_01',
        name: 'Hole Punch'
    },
    {
        id: 'hacksaw_01',
        name: 'Hacksaw'
    },
    {
        id: 'leather_punch_01',
        name: 'Leather Punch'
    },
    {
        id: 'sewing_needle_01',
        name: 'Sewing Needle'
    },
    {
        id: 'squeeze_clamp_01',
        name: 'Squeeze Clamp'
    },
    {
        id: 'c_clamp_01',
        name: 'C Clamp'
    }
]

export const MASTERSUPPLYLIST: MasterSupplyItem[] = [
    {
        id: 'wood_glue_01',
        name: 'Wood Glue'
    },
    {
        id: 'card_stock_01',
        name: 'Card Stock'
    },
    {
        id: 'wire_nail_01',
        name: 'Wire Nails'
    },
    {
        id: 'foam_brush_01',
        name: 'Foam Brush'
    },
    {
        id: 'jewelry_wire_01',
        name: 'Jewelry Wire'
    },
    {
        id: 'art_supplies_01',
        name: 'Art Supplies'
    },
    {
        id: 'cardboard_01',
        name: 'Cardboard'
    },
    {
        id:'hard_surface_01',
        name: 'Hard Flat Surface'
    },
    {
        id: 'polyurethane_01',
        name: 'Polyurethane'
    },
    {
        id: 'sand_paper_01',
        name: 'Sand Paper'
    },
    {
        id: 'thread_01',
        name: 'Thread'
    }
]

export const PRODUCTINSTRUCTIONKEY: ProductInstruction[] = [
    {
        productId: 'divider_01_instruction_key',
        supplyList: {
            toolList: [
                {
                    toolId: 'xacto_01',
                    status: 'partially required',
                    quantity: 1,
                    comment: `standard sized blade`
                },
                {
                    toolId: 'scissors_01',
                    status: 'required at minimum',
                    quantity: 1,
                    comment: `any size will do`
                },
                {
                    toolId: 'hole_punch_01',
                    status: 'helpful but not required',
                    quantity: 1
                },
                {
                    toolId: 'leather_punch_01',
                    status: 'helpful but not required',
                    quantity: 1
                }
            ],
            materialList: [
                {
                    materialId: 'wood_glue_01',
                    status: 'preferred',
                    comment: `Elmer's glue all will work fine if you dont have this`
                },
                {
                    materialId: 'wire_nail_01',
                    status: 'required',
                    quantity: 5
                },
                {
                    materialId: 'thread_01',
                    status: 'required',
                    amount: `maybe a foot or so`
                },
                {
                    materialId: 'hard_surface_01',
                    status: 'required',
                    quantity: 2
                },
                {
                    materialId: 'sand_paper_01',
                    status: 'required',
                    comment: `ideally you should have at least 120, 150, 220 and 320 grits for smoothing the parts and at least 400 - 800 grit for finishing them`
                },
                {
                    materialId: 'polyurethane_01',
                    status: 'required',
                    comment: `spray poly will work fine if you don't have a can of brush poly`
                },
                {
                    materialId: 'foam_brush_01',
                    status: 'required',
                    comment: `if you're using spray on poly this isn't required`
                }
            ]
        },
        sizes: [
            {
                modelId: 'divider_01_small',
                instructions: [
                    {
                        step: 1,
                        textId: 'core_01_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 2,
                        textId: 'core_02_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 3,
                        textId: 'core_03_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 4,
                        textId: 'core_04_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                modelId: 'divider_01_medium',
                instructions: [
                    {
                        step: 1,
                        textId: 'core_01_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 2,
                        textId: 'core_02_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 3,
                        textId: 'core_03_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 4,
                        textId: 'core_04_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                modelId: 'divider_01_large',
                instructions: [
                    {
                        step: 1,
                        textId: 'core_01_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 2,
                        textId: 'core_02_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 3,
                        textId: 'core_03_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 4,
                        textId: 'core_04_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        productId: 'divider_02_instruction_key',
        supplyList: {
            toolList: [
                {
                    toolId: 'xacto_01',
                    status: 'partially required',
                    quantity: 1,
                    comment: `standard sized blade`
                },
                {
                    toolId: 'scissors_01',
                    status: 'required at minimum',
                    quantity: 1,
                    comment: `any size will do`
                },
                {
                    toolId: 'hole_punch_01',
                    status: 'helpful but not required',
                    quantity: 1
                },
                {
                    toolId: 'leather_punch_01',
                    status: 'helpful but not required',
                    quantity: 1
                }
            ],
            materialList: [
                {
                    materialId: 'wood_glue_01',
                    status: 'preferred',
                    comment: `Elmer's glue all will work fine if you dont have this`
                },
                {
                    materialId: 'wire_nail_01',
                    status: 'required',
                    quantity: 5
                },
                {
                    materialId: 'thread_01',
                    status: 'required',
                    amount: `maybe a foot or so`
                },
                {
                    materialId: 'sand_paper_01',
                    status: 'required',
                    comment: `ideally you should have at least 120, 150, 220 and 320 grits for smoothing the parts and at least 400 - 800 grit for finishing them`
                },
                {
                    materialId: 'polyurethane_01',
                    status: 'required',
                    comment: `spray poly will work fine if you don't have a can of brush poly`
                },
                {
                    materialId: 'foam_brush_01',
                    status: 'required',
                    comment: `if you're using spray on poly this isn't required`
                }
            ]
        },
        sizes: [
            {
                modelId: 'divider_02_small',
                instructions: [
                    {
                        step: 1,
                        textId: 'core_01_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 2,
                        textId: 'core_02_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 3,
                        textId: 'core_03_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 4,
                        textId: 'core_04_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                modelId: 'divider_02_medium',
                instructions: [
                    {
                        step: 1,
                        textId: 'core_01_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 2,
                        textId: 'core_02_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 3,
                        textId: 'core_03_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 4,
                        textId: 'core_04_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                modelId: 'divider_02_large',
                instructions: [
                    {
                        step: 1,
                        textId: 'core_01_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 2,
                        textId: 'core_02_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 3,
                        textId: 'core_03_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 4,
                        textId: 'core_04_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        productId: 'divider_03_instruction_key',
        supplyList: {
            toolList: [
                {
                    toolId: 'xacto_01',
                    status: 'partially required',
                    quantity: 1,
                    comment: `standard sized blade`
                },
                {
                    toolId: 'scissors_01',
                    status: 'required at minimum',
                    quantity: 1,
                    comment: `any size will do`
                },
                {
                    toolId: 'hole_punch_01',
                    status: 'helpful but not required',
                    quantity: 1
                },
                {
                    toolId: 'leather_punch_01',
                    status: 'helpful but not required',
                    quantity: 1
                }
            ],
            materialList: [
                {
                    materialId: 'wood_glue_01',
                    status: 'preferred',
                    comment: `Elmer's glue all will work fine if you dont have this`
                },
                {
                    materialId: 'wire_nail_01',
                    status: 'required',
                    quantity: 5
                },
                {
                    materialId: 'thread_01',
                    status: 'required',
                    amount: `maybe a foot or so`
                },
                {
                    materialId: 'sand_paper_01',
                    status: 'required',
                    comment: `ideally you should have at least 120, 150, 220 and 320 grits for smoothing the parts and at least 400 - 800 grit for finishing them`
                },
                {
                    materialId: 'polyurethane_01',
                    status: 'required',
                    comment: `spray poly will work fine if you don't have a can of brush poly`
                },
                {
                    materialId: 'foam_brush_01',
                    status: 'required',
                    comment: `if you're using spray on poly this isn't required`
                }
            ]
        },
        sizes: [
            {
                modelId: 'divider_02_small',
                instructions: [
                    {
                        step: 1,
                        textId: 'core_01_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 2,
                        textId: 'core_02_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 3,
                        textId: 'core_03_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 4,
                        textId: 'core_04_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                modelId: 'divider_02_medium',
                instructions: [
                    {
                        step: 1,
                        textId: 'core_01_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 2,
                        textId: 'core_02_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 3,
                        textId: 'core_03_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 4,
                        textId: 'core_04_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                modelId: 'divider_02_large',
                instructions: [
                    {
                        step: 1,
                        textId: 'core_01_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 2,
                        textId: 'core_02_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 3,
                        textId: 'core_03_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    },
                    {
                        step: 4,
                        textId: 'core_04_a',
                        store: 'core',
                        graphic: {
                            path: 'path_to_graphic',
                            gridLocation:[
                                {
                                    minWidth: 250,
                                    maxWidth: 500,
                                    location: '1/1/2/2'
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
]







export interface UserLogin extends UserNameCore, PasswordCore, UserDataCore{}

export interface UserSummary extends UserNameCore, UserIdCore, UserDataCore, UserStatusCore{
    coverPhoto: string;
}

export interface UserSkill{
    skillId: string;
    years: string;
    level: string;
    passionLevel: number;
}

export interface GalleryPhoto extends IdCore, PhotoCore, OptionalTitleCore{ caption?: string; }

export interface GallerySeries extends IdCore, OptionalTitleCore, GalleryPhotoListCore{}

export interface GalleryCollection extends IdCore, OptionalTitleCore, GalleryPhotoListCore{
    series?: GallerySeries;
}

export interface UserGallery extends GalleryPhotoListCore{ collections?: GalleryCollection[]; }

export interface UserContent extends UserIdCore, UserNameCore, UserStatusCore{
    userIntro: string;
    supplyList?: InstructionSupplyList;
    gallery?: UserGallery;
    productList?: string;
    shoppingList?: string;
    cart?: string;
}


export interface UserProductListItem extends ProductIdCore, ModelIdCore, AccessKeyCore{}

export interface ProductUserPermission extends UserIdCore, AccessKeyCore{}

export interface UserProductPermissionItem extends UserIdCore{ products: UserProductListItem[]; }

export interface ProductPermissionObject extends ModelIdCore{ users: ProductUserPermission[]; }

export interface ProductPermissionListItem extends ProductIdCore{ models: ProductPermissionObject[]; }



export const USERLOGINDATA: UserLogin[] = [
    {
        username: 'CoolCoder69',
        password: 'cool69',
        userData: 'cool_coder_69_data'
    },
    {
        username: 'CreativeCat77',
        password: 'creative77',
        userData: 'creative_cat_69_data'
    },
    {
        username: 'DopeArtist1111',
        password: 'dope11',
        userData: 'dope_artist_1111_data'
    },
    {
        username: 'CraftyGuy2222',
        password: 'crafty22',
        userData: 'crafty_guy_2222_data'
    },
    {
        username: 'HackerMan333',
        password: 'hacker3',
        userData: 'hacker_man_333_data'
    }
]

export const USERPROFILEDATA: UserContent[] = [
    {
        userId: 'unique_key_for_cool_coder_69',
        username: 'CoolCoder69',
        userIntro: `I'm a cool coder blahblahblah`,
        userStatus: 'new member'
    },
    {
        userId: 'unique_key_for_creative_cat_77',
        username: 'CreativeCat77',
        userIntro: `I'm a creative cat blahblahblah`,
        userStatus: 'new member'
    },
    {
        userId: 'unique_key_for_dope_artist_1111',
        username: 'DopeArtist1111',
        userIntro: `I'm a dope artist blahblahblah`,
        userStatus: 'new member'
    },
    {
        userId: 'unique_key_for_crafty_guy_2222',
        username: 'CraftyGuy2222',
        userIntro: `I'm a ceafty Guy blahblahblah`,
        userStatus: 'new member'
    },
    {
        userId: 'unique_key_for_hacker_man_333',
        username: 'HackerMan333',
        userIntro: `I'm Hacker Man blahblahblah`,
        userStatus: 'new member'
    }
]

export const USERPERMISSIONLIST: UserProductPermissionItem[] = [
    {
        userId: 'unique_key_for_cool_coder_69',
        products: [
            {
                productId: 'divider_01',
                modelId: 'divider_01_small_a',
                accessKey: 'some_unique_key_for_cool_coder_69_01'
            },
            {
                productId: 'divider_02',
                modelId: 'divider_02_small_a',
                accessKey: 'some_unique_key_for_cool_coder_69_02'
            },
            {
                productId: 'divider_03',
                modelId: 'divider_03_small_a',
                accessKey: 'some_unique_key_for_cool_coder_69_03'
            }
        ]
    },
    {
        userId: 'unique_key_for_creative_cat_77',
        products: [
            {
                productId: 'divider_01',
                modelId: 'divider_01_medium_a',
                accessKey: 'some_unique_key_for_creative_cat_77_01'
            },
            {
                productId: 'divider_02',
                modelId: 'divider_02_medium_a',
                accessKey: 'some_unique_key_for_creative_cat_77_02'
            },
            {
                productId: 'divider_03',
                modelId: 'divider_03_medium_a',
                accessKey: 'some_unique_key_for_creative_cat_77_03'
            }
        ]
    },
    {
        userId: 'unique_key_for_dope_artist_1111',
        products: [
            {
                productId: 'divider_01',
                modelId: 'divider_01_large_a',
                accessKey: 'some_unique_key_for_dope_artist_1111_01'
            },
            {
                productId: 'divider_02',
                modelId: 'divider_02_large_a',
                accessKey: 'some_unique_key_for_dope_artist_1111_02'
            },
            {
                productId: 'divider_03',
                modelId: 'divider_03_large_a',
                accessKey: 'some_unique_key_for_dope_artist_1111_03'
            }
        ]
    },
    {
        userId: 'unique_key_for_crafty_guy_2222',
        products: [
            {
                productId: 'divider_01',
                modelId: 'divider_01_small_a',
                accessKey: 'some_unique_key_for_crafty_guy_2222_01'
            },
            {
                productId: 'divider_01',
                modelId: 'divider_01_medium_a',
                accessKey: 'some_unique_key_for_crafty_guy_2222_02'
            },
            {
                productId: 'divider_01',
                modelId: 'divider_01_large_a',
                accessKey: 'some_unique_key_for_crafty_guy_222_03'
            }
        ]
    },
    {
        userId: 'unique_key_for_hacker_man_333',
        products: [
            {
                productId: 'divider_02',
                modelId: 'divider_02_small_a',
                accessKey: 'some_unique_key_for_hacker_man_333_01'
            },
            {
                productId: 'divider_02',
                modelId: 'divider_02_medium_a',
                accessKey: 'some_unique_key_for_hacker_man_333_02'
            },
            {
                productId: 'divider_02',
                modelId: 'divider_02_large_a',
                accessKey: 'some_unique_key_for_hacker_man_333_03'
            }
        ]
    }
]

export const PRODUCTPERMISSIONLIST: ProductPermissionListItem[] = [
    {
        productId: 'divider_01',
        models: [
            {
                modelId: 'divider_01_small_a',
                users: [
                    {
                        userId: 'unique_key_for_cool_coder_69',
                        accessKey: 'some_unique_key_for_cool_coder_69_01'
                    },
                    {
                        userId: 'unique_key_for_crafty_guy_2222',
                        accessKey: 'some_unique_key_for_crafty_guy_2222_01'
                    }
                ]
            },
            {
                modelId: 'divider_01_medium_a',
                users: [
                    {
                        userId: 'unique_key_for_creative_cat_77',
                        accessKey: 'some_unique_key_for_creative_cat_77_01'
                    },
                    {
                        userId: 'unique_key_for_crafty_guy_2222',
                        accessKey: 'some_unique_key_for_crafty_guy_2222_02'
                    }
                ]
            },
            {
                modelId: 'divider_01_large_a',
                users: [
                    {
                        userId: 'unique_key_for_dope_artist_1111',
                        accessKey: 'some_unique_key_for_dope_artist_1111_01'
                    },
                    {
                        userId: 'unique_key_for_crafty_guy_2222',
                        accessKey: 'some_unique_key_for_crafty_guy_2222_03'
                    }
                ]
            }
        ]
    },
    {
        productId: 'divider_02',
        models: [
            {
                modelId: 'divider_02_small_a',
                users: [
                    {
                        userId: 'unique_key_for_cool_coder_69',
                        accessKey: 'some_unique_key_for_cool_coder_69_02'
                    },
                    {
                        userId: 'unique_key_for_hacker_man_333',
                        accessKey: 'some_unique_key_for_hacker_man_333_01'
                    }
                ]
            },
            {
                modelId: 'divider_02_medium_a',
                users: [
                    {
                        userId: 'unique_key_for_creative_cat_77',
                        accessKey: 'some_unique_key_for_cool_creative_cat_77_02'
                    },
                    {
                        userId: 'unique_key_for_hacker_man_333',
                        accessKey: 'some_unique_key_for_hacker_man_333_02'
                    }
                ]
            },
            {
                modelId: 'divider_02_large_a',
                users: [
                    {
                        userId: 'unique_key_for_dope_artist_1111',
                        accessKey: 'some_unique_key_for_dope_artist_1111_02'
                    },
                    {
                        userId: 'unique_key_for_hacker_man_333',
                        accessKey: 'some_unique_key_for_hacker_man_333_03'
                    }
                ]
            }
        ]
    },
    {
        productId: 'divider_03',
        models: [
            {
                modelId: 'divider_03_small_a',
                users: [
                    {
                        userId: 'unique_key_for_cool_coder_69',
                        accessKey: 'some_unique_key_for_cool_coder_69_03'
                    }
                ]
            },
            {
                modelId: 'divider_03_medium_a',
                users: [
                    {
                        userId: 'unique_key_for_creative_cat_77',
                        accessKey: 'some_unique_key_for_cool_creative_cat_77_03'
                    }
                ]
            },
            {
                modelId: 'divider_03_large_a',
                users: [
                    {
                        userId: 'unique_key_for_dope_artist_1111',
                        accessKey: 'some_unique_key_for_dope_artist_1111_03'
                    }
                ]
            }
        ]
    }
]







export interface GraphicVertex {
    
}





/*export interface Photo extends PicCore{ caption?: string; }
export interface Tip extends TitleCore, TextCore{}

export interface MicroStep extends ParagraphTextCore{
    sequence: number;
    photos?: Photo[];
    tips?: Tip[];
}

export interface Item{
    item: string;
    status: string;
    comment?: string;
}

export interface Instructions {
    steps: MicroStep[];
    materials: Item[];
}









export interface GraphicAttribute{
    attribute: string;
    setting: string;
}

export interface GraphicElement{
    item: string;
    attributes: GraphicAttribute[];
    styleAttributes?: GraphicAttribute[];
}

export interface Material{
    item: string;
    status: string;
    use: string;
    comment?: string;
}

export interface Graphic{
    id: string;
    location: string;
    elements: GraphicElement[];
}

export interface PhotoCore{
    path: string;
    location: string;
}

export interface StepText{
    location: string;
    text: string[];
    style: string;
}

export interface Tip{
    title?: string;
    text: string;
}

export interface Step{
    title: string;
    id: string;
    graphics?: Graphic[];
    photos?: PhotoCore[];
    text: StepText[];
    tips?: Tip[];
}

export interface Instructions{
    title: string;
    intro: string[];
    supplies: Material[];
    steps: Step[];
}

export interface InstructionNav{
    title: string;
    id: string;
}

export const INSTRUCTIONS: Instructions = {
    title: 'Golden Ratio Divider Assembly',
    intro: [
        'blahblahblahblah'
    ],
    supplies: [
        {}
    ]
}*/







export interface SvgPropertyCore{
    name: string;
    setting: string;
  }
  
  export interface SvgAttributeCore extends SvgPropertyCore{}
  
  export interface SvgStyleCore extends SvgPropertyCore{}
  
  export interface SvgElement{
    name: string;
    attributes: SvgAttributeCore[];
    styles: SvgStyleCore[];
    subElements?: SvgElement[];
  }



  export interface ElementTagResponse{ tagName: string; remainder: string; }



  export interface OvaadSvgStyleProperty{
    property: string;
    setting: string;
  }
  
  export interface OvaadGraphicAttribute{
    attribute: string;
    setting: string;
    bind? : string;
  }
  
  export interface OvaadGraphicObject{
    element: string;
    selfClosing: boolean;
    attributes: OvaadGraphicAttribute[];
    styles?: OvaadSvgStyleProperty[];
    subElements?: OvaadGraphicObject[];
  }
  
  export interface GraphicObjectResponse{
    response: OvaadGraphicObject[];
    remainder: string[];
  }

  export interface OvaadSvgDataObject extends TitleCore{
      graphicId: string;
      viewBox: ViewBoxParameters;
      coreAttributes: OvaadGraphicAttribute[];
      coreStyles: OvaadSvgStyleProperty[];
      elements: OvaadGraphicObject[];
  }



