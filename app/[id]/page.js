import Image from 'next/image';
import React from 'react'
import { notFound } from 'next/navigation'

import styles from './styles.module.css'

async function getPost(id) {
    try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        return response.json();
    } catch (error) {
        throw new Error(error);
    }
}

async function Page({ params }) {
    const { id, title, body } = await getPost(params.id);

    if (!title) {
        return notFound();
    }

    return (
        <div className={styles.blogContainer}>
            <div className={styles.cardImage}>
                <Image
                    src={`https://picsum.photos/200/300?random=${id}`}
                    alt={title}
                    fill
                />
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default Page