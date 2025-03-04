declare module "next-sanity" {
    import React from 'react';
  
    // Define a type for PortableText content
    export type PortableTextBlock = {
      _key: string;
      _type: string;
      children?: PortableTextSpan[];
      markDefs?: PortableTextMarkDef[];
      style?: string;
      [key: string]; // You can be more specific based on your content structure
    };
  
    export type PortableTextSpan = {
      _key: string;
      _type: string;
      marks?: string[];
      text: string;
    };
  
    export type PortableTextMarkDef = {
      _key: string;
      _type: string;
      [key: string]; // You can be more specific based on your mark definitions
    };
  
    export const PortableText: React.ComponentType<{ blocks: PortableTextBlock[] }>;
  
    // Define a type for SanityDocument
    export type SanityDocument = {
      _id: string;
      _type: string;
      [key: string]; // You can be more specific based on your document structure
    };
}
  