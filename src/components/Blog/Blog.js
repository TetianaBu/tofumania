import React from "react";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <p>
          Welcome to Tofcunio blog section, where the world of tofu unfolds like
          a captivating storybook
        </p>
      </section>
      <div>
        <section>
          <article>
            <>some text</>
          </article>
          <article>
            <>some text</>
          </article>
        </section>
        <aside>some aside</aside>
      </div>
    </div>
  );
}

export default Blog;
