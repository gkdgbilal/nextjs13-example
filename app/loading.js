import React from "react";

import styles from "./styles.module.css";

export default function Loading() {
    return (
        <div class={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}