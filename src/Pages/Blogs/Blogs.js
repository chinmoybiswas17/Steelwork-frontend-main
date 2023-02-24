import React from "react";

const Blogs = () => {
  return (
    <section className="px-4 mx-auto lg:mx-32 min-h-screen">
      <h2 className="text-5xl font-bold text-center py-8">
        Frequently Asked Questions
      </h2>
      <div className="q-and-a mt-8">
        <h2 className="text-3xl font-semibold text-primary my-4">
          How to improve the performance of a React Application?
        </h2>
        <p className="text-xl text-justify">
          React offers faster speed by default. But there can be some
          performance issues. These issues can be solved by : <br /> 1. Keeping
          the state local where needed. So the component doesn't rerender
          unnecessarily. <br /> 2. Implementing lazy loading. Thus a page does
          not need to load all data before starting to render. <br /> 3. Make
          sure component receives only necessary props. <br /> 4. Implementing
          Virtualization. If a page has, suppose 200 Items This allows
          developers to stop rendering all 200 at once. Instead they can first
          load 10 or 20 or so items, after that another 10 or 20 and repeat.
        </p>
      </div>
      <div className="divider lg:mt-10 lg:mb-20"></div>
      <div className="q-and-a">
        <h2 className="text-3xl font-semibold text-primary my-4">
          What are the different ways to manage a state in a React application?
        </h2>
        <p className="text-xl text-justify">
          There are four types of states to manage in a react application.{" "}
          <br /> 1. <span className="font-semibold">Local State :</span> Local
          State can be managed by build in react hooks like{" "}
          <kbd className="bg-gray-200 rounded px-2">useState</kbd> &nbsp;
          <kbd className="bg-gray-200 rounded px-2">useReducer</kbd> <br /> 2.{" "}
          <span className="font-semibold">Global State :</span> Developers
          usually uses{" "}
          <kbd className="bg-gray-200 rounded px-2">context api</kbd> for this.
          But it is best to use third party libraries like{" "}
          <strong>Zustand, Jotai, Recoil</strong> etc. <br /> 3.{" "}
          <span className="font-semibold">Server State :</span> It is
          challenging to manage server state. As it includes, fetching, caching,
          loading, errors. We should use libraries like{" "}
          <strong>React Query</strong>, which makes it so much easier. <br /> 4.{" "}
          <span className="font-semibold">URL State : </span> We should use{" "}
          <strong>React Router</strong> for managing this state easily. React
          router provides{" "}
          <kbd className="bg-gray-200 rounded px-2">
            useLocation, useHistory, useParams
          </kbd>{" "}
          to manage this.
        </p>
      </div>
      <div className="divider lg:mt-10 lg:mb-20"></div>
      <div className="q-and-a">
        <h2 className="text-3xl font-semibold text-primary my-4">
          How does prototypical inheritance work?
        </h2>
        <p className="text-xl text-justify">
          Prototypical inheritance means the ability to access object properties
          and methods from another object. This means, prototypical inheritance
          allows us to reuse the properties/methods from one js object to
          another through reference pointer function. Javascript prototype can
          be used to add new properties and methods to an existing object
          constructor. It works by using the concept of prototypical chaining.
          <kbd className="bg-gray-200 rounded px-2">object.prototype</kbd> is at
          the top of prototypical inheritance chain. All objects inherits from
          <kbd className="bg-gray-200 rounded px-2">object.prototype</kbd>.
        </p>
      </div>
      <div className="divider lg:mt-10 lg:mb-20"></div>
      <div className="q-and-a">
        <h2 className="text-3xl font-semibold text-primary my-4">
          {" "}
          Why you do not set the state directly in React. For example, if you
          have{" "}
          <kbd className="bg-gray-200 rounded text-accent text-2xl px-1 mx-1">
            const [products, setProducts] = useState([])
          </kbd>
          . Why you do not set{" "}
          <kbd className="bg-gray-200 rounded text-accent text-2xl px-1 mx-1">
            products = [...]
          </kbd>{" "}
          instead, you use the{" "}
          <kbd className="bg-gray-200 rounded text-accent text-2xl px-1 mx-1">
            setProducts
          </kbd>{" "}
          ?
        </h2>
        <p className="text-xl text-justify">
          We should not set the state directly. Because we will lose control of
          the state if we do so. React may batch multiple{" "}
          <kbd className="bg-gray-200 rounded px-1 mx-1">setState</kbd> calls
          into a single update. When the state is changed directly, it does not
          change &nbsp;{" "}
          <kbd className="bg-gray-200 rounded px-1 mx-1">this.state</kbd>{" "}
          directly. It may be updated asynchronously. Also calling the{" "}
          <kbd className="bg-gray-200 rounded px-1 mx-1">setState</kbd> function
          afterward, may change the update just made. And it also creates
          unnecessary rerendering.
        </p>
      </div>
      <div className="divider lg:mt-10 lg:mb-20"></div>
      <div className="q-and-a">
        <h2 className="text-3xl font-semibold text-primary my-4">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h2>
      </div>
      <div className="divider lg:mt-10 lg:mb-20"></div>
      <div className="q-and-a">
        <h2 className="text-3xl font-semibold text-primary my-4">
          What is a unit test? Why should developers write unit tests?
        </h2>
        <p className="text-xl text-justify">
          In software engineering, unit testing is a software testing method,
          where a developer writes a piece of code to test out an unit(could be
          a smallest part of an application) of a software. Unit testing is a
          must process for a software as it indicates the flaws, issues, bug
          etc. in its early development stages. It also helps the developer to
          understand the base of code and that makes them able to detect and
          change defect code. Moreover, in a testing level hierarchy, unit
          testing is the first level of testing done before integration.
        </p>
      </div>
      <div className="divider lg:mt-10 lg:mb-20"></div>
    </section>
  );
};

export default Blogs;
