import styles from "./styles.module.css"
import { PortableText, PortableTextBlock } from "@portabletext/react";

interface postParams {
    title: string,
    description: PortableTextBlock,
    whyItsBad: PortableTextBlock
}

export default function Post({ title, description, whyItsBad }: postParams) {
    return (
        <div className={styles.post}>
            <h1>{title}</h1>
            <PortableText value={description} />
            <h1>Why It&apos;s Bad</h1>
            <PortableText value={whyItsBad} />
        </div>
    )
}