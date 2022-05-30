import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-12 my-6'>
            <h1 className='text-2xl  text-left'>What is Context API?</h1>
            <p className='text-gray-700 text-justify'>
                React is a very familiar library of it's various amazing features.Context Api is one of them.In React, generally we can send data by prop drilling method.That means data can be send only grandparent components props  to child components.But Now it is very simple to pass data through Context Api. 	So, we can say that  “The React Context API is a component structure, which allows us to share data across all levels of the application or components.”
                The Context API can be used to share data with multiple components.The developers uses it for theming,authentication,languages, dark mood etc.</p>


            <h1 className='text-left text-2xl'>What Is Semantic Tag?</h1>

            <p className='text-justify'>Semantic Tag are used to give information the browser.Getting the information of semantic tag browser display the content and also  help SEO. For example, a  "P" tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs tag. "h1" tag is used for heading.
                On the otherhand, if we use b or i tag ,They don't give additional information.They just make word bold and make word italic form.By using semantic tag we can smartly use css.
            </p>


        </div>
    );
};

export default Blogs;