# NamasteReactRivision

## redoing NamasteReact to get more clarity

---

## how to set up ssh inside git in my system?

# npm init

# what is keywords in the config of npm -DONE

# caret and tilde

## dev dependencies and normal dependencies-DONE

#npm install -D parcel(understand it thoroughly)-DONE

# packageLOCK.json -ShA512 hash what is it

# transitive dependencies

# Isc license -make notes

# putting node_modules into gitignore-done

# see what is inside package.json and packagelock.json

-----break------------------
ep2

# npx parcel index.html

# npm and npx difference

#install react,react-dom as a normal dependency
#what is react-dom?
#import react and react-dom from react and react-dom/client respectively
#script type as module
#parcel-hmr,file watching algorithm,image optimization,file minification,compress files,tree shaking
#dist folder and .parcel-cache -build time reduces because it does caching
#most expensive thing in your web browser is to load images
#browserslist-last 2 versions

-----------break-------------------------

ep3:

scripts:for start and build,test.what are these scripts?

## react.createElement is an object ,when we render it it becomes an html element,just console log and see

# not rendered inside <div  id='root'>

# React and jsx is different .we can write react without jsx also.then what is jsx?

# React.createElement =>ReactElement-Js object => HTMLELement(rendered on browser)

# react doesn't understand jsx

    in the case of jsx babel converts jsx to React.createElement which react understands and then story continues

tryout babel

# how do i write img tag inside jsx,anchor tag

# single line and multiple lines -search and understand

# extensions used by Akshai -

     Eslint -what is linting?
     prettier?

#components
Two types of components-functional and class based

# functional component

    -It is a normal js function which returns some piece of jsx(react element)

    const fn =() => true;//removed return so no need of curly brackets
    const fn =() => {return  true;};

# ie

    const HeadingComponent = () => {
    return <h1>Hello world </h1>
    }

is same as

const HeadingComponent =()=> <h1>Hello world</h1>

# difference between react component and react elements

#The browser doesnt understan whether there is a component ,it only understand html .It is babel that is doing all the work and converting jsx into react elements

# component composition

    Component composition is a technique in software development where complex systems are constructed by combining smaller, reusable, and self-contained components. This approach promotes modularity, maintainability, and scalability. Here are some key concepts and examples related to component composition:

# Inside jsx and inside curly braces ,you can write any piece of js code

# cross side scripting attacks ,sending malicious data via api .How jsx santises data.How it does that

## #two ways of writing components

    <Title/> or
    <Title></Title> or
    {Title()}//because it is a function and you can write this inside curly braces

##
