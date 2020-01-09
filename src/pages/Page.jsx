import * as React from 'react';
import './styles.css';

import {
  useParams,
} from 'react-router-dom';

function createMarkup(content) {
  return {__html: content};
}

const Page = ({ pages = {} }) => {
  const { pageSlug } = useParams();
  console.log('pageSlug', pageSlug);
  const page = pages.find(p => p.slug === (pageSlug || 'home'))

  const subPages = pages.filter(p => p.parent === page.id)

  return (
    <>
      <h2>{page?.title?.rendered}</h2>
      <div dangerouslySetInnerHTML={createMarkup(page?.content?.rendered)} />
      <ul>
        {
          subPages.map(subPage => <li>{subPage.slug}</li>)
        }
      </ul>
    </>
  )
}



export default Page;
