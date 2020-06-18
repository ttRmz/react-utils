(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(module,__webpack_exports__,__webpack_require__){"use strict";function copyToClipboard(text){var callback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},createdElement=document.createElement("textarea"),iOSNavigator=window.navigator.userAgent.match(/ipad|iphone/i),yPosition=window.pageYOffset||document.documentElement.scrollTop;if(createdElement.contentEditable=!0,createdElement.readOnly=!1,createdElement.value=text,createdElement.style.border="0",createdElement.style.padding="0",createdElement.style.margin="0",createdElement.style.position="absolute",createdElement.style.top="".concat(yPosition,"px"),document.body.appendChild(createdElement),iOSNavigator){var range=document.createRange();range.selectNodeContents(createdElement);var selection=window.getSelection();selection.removeAllRanges(),selection.addRange(range),createdElement.setSelectionRange(0,999999)}else createdElement.select();var error=null;try{document.execCommand("copy")}catch(_unused){try{window.clipboardData.setData("text",text)}catch(err){error=err}}document.body.removeChild(createdElement),callback(error)}__webpack_require__.d(__webpack_exports__,"a",(function(){return useCopyToClipboard})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useDebounce})),__webpack_require__.d(__webpack_exports__,"c",(function(){return useEventListener})),__webpack_require__.d(__webpack_exports__,"d",(function(){return useInput})),__webpack_require__.d(__webpack_exports__,"e",(function(){return useInterval})),__webpack_require__.d(__webpack_exports__,"f",(function(){return useLocalStorage}));var slicedToArray=__webpack_require__(7),react=__webpack_require__(0),react_default=__webpack_require__.n(react);function useTimeout(){var callback=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},delay=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,_React$useState=react_default.a.useState(!1),_React$useState2=Object(slicedToArray.a)(_React$useState,2),pending=_React$useState2[0],setPending=_React$useState2[1],savedRefCallback=react_default.a.useRef();react_default.a.useEffect((function(){savedRefCallback.current=callback}),[callback]);var start=function start(){setPending(!0)},stop=react_default.a.useCallback((function(){setPending(!1)}),[]),handler=react_default.a.useCallback((function(){savedRefCallback.current&&savedRefCallback.current(),stop()}),[savedRefCallback,stop]);return react_default.a.useEffect((function(){if(pending){var timeout=window.setTimeout(handler,delay);return function(){window.clearTimeout(timeout)}}}),[pending,delay,handler]),{start:start,stop:stop,pending:pending}}function useCopyToClipboard(){var successDuration=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,_React$useState=react_default.a.useState(!1),_React$useState2=Object(slicedToArray.a)(_React$useState,2),copied=_React$useState2[0],setCopied=_React$useState2[1],_React$useState3=react_default.a.useState(null),_React$useState4=Object(slicedToArray.a)(_React$useState3,2),error=_React$useState4[0],setError=_React$useState4[1],resetStates=function resetStates(){setCopied(!1),setError(null)},_useTimeout=useTimeout(resetStates,successDuration),start=_useTimeout.start,copy=function copy(text){copyToClipboard(text,(function(error){setCopied(!error),setError(error),!error&&"number"==typeof successDuration&&successDuration>0&&start()}))};return{copied:copied,copy:copy,error:error}}function useDebounce(value,delay){var _React$useState=react_default.a.useState(value),_React$useState2=Object(slicedToArray.a)(_React$useState,2),debouncedValue=_React$useState2[0],setDebouncedValue=_React$useState2[1];return react_default.a.useEffect((function(){var handler=setTimeout((function(){setDebouncedValue(value)}),delay);return function(){clearTimeout(handler)}}),[value,delay]),debouncedValue}function useEventListener(eventName,handler){var element=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;react_default.a.useEffect((function(){if(null==element?void 0:element.addEventListener){var eventListener=function eventListener(event){return handler(event)};return element.addEventListener(eventName,eventListener),function(){element.removeEventListener(eventName,eventListener)}}}),[eventName,element,handler])}function useInput(initialValue){var stringified=initialValue.toString(),_React$useState=react_default.a.useState(stringified),_React$useState2=Object(slicedToArray.a)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1],onChange=react_default.a.useCallback((function(e){return setValue(e.target.value)}),[]),clear=react_default.a.useCallback((function(){return setValue("")}),[]);return react_default.a.useMemo((function(){return{value:value,setValue:setValue,hasValue:null!=value&&""!==value.trim(),clear:clear,onChange:onChange}}),[clear,onChange,value,setValue])}function useInterval(callback,delay){var savedCallback=react_default.a.useRef();react_default.a.useEffect((function(){savedCallback.current=callback}),[callback]),react_default.a.useEffect((function(){if(null!==delay){var id=setInterval((function tick(){savedCallback.current()}),delay);return function(){return clearInterval(id)}}}),[delay])}function useLocalStorage(key,initialValue){var _useState=Object(react.useState)((function(){try{var prevValue=window.localStorage.getItem(key);return prevValue?JSON.parse(prevValue):initialValue}catch(error){return console.warn("useLocalStorage : Failed to parse previous value. LocalStorage has been reset with initialValue"),initialValue}})),_useState2=Object(slicedToArray.a)(_useState,2),localStorageValue=_useState2[0],setLocalStorageValue=_useState2[1];return[localStorageValue,function setValue(value){try{var newValue=value instanceof Function?value(localStorageValue):value;setLocalStorageValue(newValue),window.localStorage.setItem(key,JSON.stringify(newValue))}catch(error){console.error("useLocalStorage : Failed to set new value",error)}}]}},200:function(module){module.exports=JSON.parse('{"name":"@ttrmz/react-utils","version":"1.5.0","description":"A library of hooks and utils for React applications.","author":{"name":"Ramirez Tristan","email":"tristan.rami@gmail.com"},"license":"MIT","repository":{"type":"git","url":"https://github.com/ttrmz/react-utils"},"bugs":{"url":"https://github.com/ttrmz/react-utils/issues"},"keywords":["react","javascript","hooks","utils","functions"],"main":"dist/index.js","module":"dist/index.es.js","jsnext:main":"dist/index.es.js","engines":{"node":">=8","npm":">=5"},"scripts":{"test":"cross-env CI=1 react-scripts test --env=jsdom","test:watch":"react-scripts test --env=jsdom","format":"prettier --write \\"**/*.{js,json,scss,md,yml,html}\\"","build":"rollup -c","build-storybook":"build-storybook","start":"rollup -c -w","storybook":"start-storybook -p 9009","prepare":"yarn run build","bump-version":"react-libraries bump-version","predeploy":"build-storybook","deploy":"gh-pages -d storybook-static"},"peerDependencies":{"react":"^16.9.0"},"devDependencies":{"@babel/core":"^7.0.0","@babel/plugin-external-helpers":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-proposal-decorators":"^7.0.0","@babel/plugin-proposal-do-expressions":"^7.0.0","@babel/plugin-proposal-export-default-from":"^7.0.0","@babel/plugin-proposal-export-namespace-from":"^7.0.0","@babel/plugin-proposal-function-bind":"^7.0.0","@babel/plugin-proposal-function-sent":"^7.0.0","@babel/plugin-proposal-json-strings":"^7.0.0","@babel/plugin-proposal-logical-assignment-operators":"^7.0.0","@babel/plugin-proposal-nullish-coalescing-operator":"^7.0.0","@babel/plugin-proposal-numeric-separator":"^7.0.0","@babel/plugin-proposal-optional-chaining":"^7.0.0","@babel/plugin-proposal-pipeline-operator":"^7.0.0","@babel/plugin-proposal-throw-expressions":"^7.0.0","@babel/plugin-syntax-dynamic-import":"^7.0.0","@babel/plugin-syntax-import-meta":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-react":"^7.0.0","@simonrelet/react-libraries":"^2.0.0","@storybook/addon-actions":"^5.3.19","@storybook/addon-knobs":"^5.3.19","@storybook/addon-links":"^5.3.19","@storybook/addons":"^5.3.19","@storybook/preset-create-react-app":"^3.1.1","@storybook/react":"^5.3.19","@testing-library/react-hooks":"^3.2.1","babel-eslint":"^10.0.1","cross-env":"^5.2.0","eslint":"5.16.0","eslint-config-standard":"^11.0.0","eslint-config-standard-react":"^6.0.0","eslint-plugin-import":"^2.13.0","eslint-plugin-node":"^7.0.1","eslint-plugin-promise":"^4.0.0","eslint-plugin-react":"^7.20.0","eslint-plugin-standard":"^3.1.0","gh-pages":"^2.0.1","prettier":"^2.0.5","react":"^16.9.0","react-scripts":"^3.4.0","react-test-renderer":"^16.9.0","rollup":"^1.1.2","rollup-plugin-babel":"^4.3.2","rollup-plugin-commonjs":"^9.2.0","rollup-plugin-node-resolve":"^4.0.0","rollup-plugin-peer-deps-external":"^2.2.0","rollup-plugin-url":"^2.1.0","storybook-readme":"^5.0.8"},"dependencies":{}}')},322:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return useCopyToClipboard_stories_Basic})),__webpack_require__.d(__webpack_exports__,"Timeout",(function(){return useCopyToClipboard_stories_Timeout}));var dist=__webpack_require__(67),react=__webpack_require__(0),react_default=__webpack_require__.n(react),src=__webpack_require__(13),useCopyToClipboard_stories_InputButton=(__webpack_exports__.default={title:"useCopyToClipboard",parameters:{readme:{sidebar:"# useCopyToClipboard\n\n```jsx\nimport { useCopyToClipboard, useInput } from '@ttrmz/react-utils'\n```\n\n## Usage\n\n```jsx\nconst Example = () => {\n  const { value, onChange } = useInput('')\n  const { copy, copied, error } = useCopyToClipboard(1000) // copied and error states will be reset after 1000 ms\n\n  return (\n    <div>\n      <input value={value} onChange={onChange} />\n\n      <button onClick={() => copy(value)}>{copied ? 'Copied' : 'Copy'}</button>\n\n      {error && <span>Failed to copy</span>}\n    </div>\n  )\n}\n```\n\n## Parameters\n\n| Name            | Description                         | Type   |\n| --------------- | ----------------------------------- | ------ |\n| successDuration | timeout delay (default value : _0_) | Number |\n\n## Returned object\n\n| Key    | Type     |\n| ------ | -------- |\n| copied | Boolean  |\n| copy   | Function |\n| error  | Boolean  |\n"}}},function InputButton(_ref){var copy=_ref.copy,copied=_ref.copied,_useInput=Object(src.d)(""),value=_useInput.value,onChange=_useInput.onChange,setValue=_useInput.setValue;return react_default.a.createElement("div",null,react_default.a.createElement("input",{placeholder:"Text to copy",onChange:onChange,value:value}),react_default.a.createElement("button",{onClick:function onCopy(){copy(value),setValue("")}},copied?"Copied":"Copy"))}),useCopyToClipboard_stories_Basic=function Basic(){var _useCopyToClipboard=Object(src.a)(),copy=_useCopyToClipboard.copy,copied=_useCopyToClipboard.copied;return react_default.a.createElement(useCopyToClipboard_stories_InputButton,{copy:copy,copied:copied})};useCopyToClipboard_stories_Basic.story={name:"Basic usage"};var useCopyToClipboard_stories_Timeout=function Timeout(){var delay=Object(dist.number)("delay",3e3,{min:0,max:1e4,step:1e3}),_useCopyToClipboard2=Object(src.a)(delay),copy=_useCopyToClipboard2.copy,copied=_useCopyToClipboard2.copied;return react_default.a.createElement(useCopyToClipboard_stories_InputButton,{copy:copy,copied:copied})};useCopyToClipboard_stories_Timeout.story={name:"With timeout"},useCopyToClipboard_stories_Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useCopyToClipboard/useCopyToClipboard.stories.js"]={name:"Basic",docgenInfo:useCopyToClipboard_stories_Basic.__docgenInfo,path:"src/useCopyToClipboard/useCopyToClipboard.stories.js"}),useCopyToClipboard_stories_Timeout.__docgenInfo={description:"",methods:[],displayName:"Timeout"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useCopyToClipboard/useCopyToClipboard.stories.js"]={name:"Timeout",docgenInfo:useCopyToClipboard_stories_Timeout.__docgenInfo,path:"src/useCopyToClipboard/useCopyToClipboard.stories.js"})},323:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return useDebounce_stories_Basic}));var dist=__webpack_require__(67),react=__webpack_require__(0),react_default=__webpack_require__.n(react),src=__webpack_require__(13),useDebounce_stories_Basic=(__webpack_exports__.default={title:"useDebounce",parameters:{readme:{sidebar:"# useDebounce\n\n```jsx\nimport { useDebounce } from '@ttrmz/react-utils'\n```\n\n## Usage\n\n```jsx\nconst Example = () => {\n  const { value, onChange } = useInput('')\n\n  const debouncedValue = useDebounce(value, 500)\n\n  return (\n    <div>\n      <input value={value} onChange={onChange} />\n\n      <p>debounced value (500ms) : {debouncedValue}</p>\n    </div>\n  )\n}\n```\n\n## Parameters\n\n| Name         | Description    | Type   |\n| ------------ | -------------- | ------ |\n| initialValue |                | Any    |\n| delay        | debounce delay | Number |\n"}}},function Basic(){var _useInput=Object(src.d)(""),value=_useInput.value,onChange=_useInput.onChange,clear=_useInput.clear,delay=Object(dist.number)("delay",500,{min:0,max:1e4,step:100}),debouncedValue=Object(src.b)(value,delay);return react_default.a.createElement("div",null,react_default.a.createElement("input",{value:value,onChange:onChange}),react_default.a.createElement("button",{onClick:clear},"clear"),react_default.a.createElement("p",null,"debounced value (",delay,"ms) : ",debouncedValue))});useDebounce_stories_Basic.story={name:"Basic usage"},useDebounce_stories_Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useDebounce/useDebounce.stories.js"]={name:"Basic",docgenInfo:useDebounce_stories_Basic.__docgenInfo,path:"src/useDebounce/useDebounce.stories.js"})},324:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return useEventListener_stories_Basic})),__webpack_require__.d(__webpack_exports__,"Custom",(function(){return useEventListener_stories_Custom}));var slicedToArray=__webpack_require__(7),react=__webpack_require__(0),react_default=__webpack_require__.n(react),src=__webpack_require__(13),useEventListener_stories_Basic=(__webpack_exports__.default={title:"useEventListener",parameters:{readme:{sidebar:"# useEventListener\n\n```jsx\nimport { useEventListener } from '@ttrmz/react-utils'\n```\n\n## Usage\n\n```jsx\nconst Example = () => {\n  const [clicked, setClicked] = React.useState(0)\n\n  useEventListener('click', () => setClicked((prev) => prev + 1))\n\n  return <p>you clicked {clicked} times</p>\n}\n```\n\n### On custom element\n\n```jsx\nimport React from 'react'\n\nimport { useEventListener } from '@ttrmz/react-utils'\n\nconst Example = () => {\n  const [clicked, setClicked] = React.useState(0)\n  const [element, setElement] = React.useState(null)\n\n  useEventListener('click', () => setClicked((prev) => prev + 1), element)\n\n  return <p ref={setElement}>you clicked {clicked} times on me</p>\n}\n```\n\n## Parameters\n\n| Name      | Description                                                         | Type     |\n| --------- | ------------------------------------------------------------------- | -------- |\n| eventName | [event's name](https://developer.mozilla.org/en-US/docs/Web/Events) | String   |\n| handler   | event listener handler that returns the event                       | Function |\n| element   | listened element (default value : _window_)                         | Element  |\n"}}},function Basic(){var _React$useState=react_default.a.useState(0),_React$useState2=Object(slicedToArray.a)(_React$useState,2),clicked=_React$useState2[0],setClicked=_React$useState2[1];return Object(src.c)("click",(function(){return setClicked((function(prev){return prev+1}))})),react_default.a.createElement("p",null,"you clicked ",clicked," times")});useEventListener_stories_Basic.story={name:"Basic usage"};var useEventListener_stories_Custom=function Custom(){var _React$useState3=react_default.a.useState(0),_React$useState4=Object(slicedToArray.a)(_React$useState3,2),clicked=_React$useState4[0],setClicked=_React$useState4[1],_React$useState5=react_default.a.useState(null),_React$useState6=Object(slicedToArray.a)(_React$useState5,2),element=_React$useState6[0],setElement=_React$useState6[1];return Object(src.c)("click",(function(){return setClicked((function(prev){return prev+1}))}),element),react_default.a.createElement("p",{ref:setElement},"you clicked ",clicked," times on me")};useEventListener_stories_Custom.story={name:"On custom element"},useEventListener_stories_Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useEventListener/useEventListener.stories.js"]={name:"Basic",docgenInfo:useEventListener_stories_Basic.__docgenInfo,path:"src/useEventListener/useEventListener.stories.js"}),useEventListener_stories_Custom.__docgenInfo={description:"",methods:[],displayName:"Custom"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useEventListener/useEventListener.stories.js"]={name:"Custom",docgenInfo:useEventListener_stories_Custom.__docgenInfo,path:"src/useEventListener/useEventListener.stories.js"})},325:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return useInput_stories_Basic}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),src=__webpack_require__(13),useInput_stories_Basic=(__webpack_exports__.default={title:"useInput",parameters:{readme:{sidebar:"# useInput\n\n```jsx\nimport { useInput } from '@ttrmz/react-utils'\n```\n\n## Usage\n\n```jsx\nconst Example = () => {\n  const { value, onChange } = useInput('')\n\n  return <input value={value} onChange={onChange} />\n}\n```\n\n## Parameters\n\n| Name         | Description            | Type   |\n| ------------ | ---------------------- | ------ |\n| defaultValue | default value of input | String |\n\n## Returned object\n\n| Key      | Type     |\n| -------- | -------- |\n| value    | String   |\n| setValue | Function |\n| onChange | Function |\n| hasValue | Boolean  |\n| clear    | Function |\n"}}},function Basic(){var _useInput=Object(src.d)(""),value=_useInput.value,onChange=_useInput.onChange;return react_default.a.createElement("input",{placeholder:"type text here",value:value,onChange:onChange})});useInput_stories_Basic.story={name:"Basic usage"},useInput_stories_Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useInput/useInput.stories.js"]={name:"Basic",docgenInfo:useInput_stories_Basic.__docgenInfo,path:"src/useInput/useInput.stories.js"})},326:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return useInterval_stories_Basic}));var slicedToArray=__webpack_require__(7),dist=__webpack_require__(67),react=__webpack_require__(0),react_default=__webpack_require__.n(react),src=__webpack_require__(13),useInterval_stories_Basic=(__webpack_exports__.default={title:"useInterval",parameters:{readme:{sidebar:"# useInterval\n\n```jsx\nimport { useInterval } from '@ttrmz/react-utils'\n```\n\n## Usage\n\n```jsx\nconst Example = () => {\n  const [count, setCount] = React.useState(0)\n\n  useInterval(() => {\n    setCount(count + 1)\n  }, 1000)\n\n  return <p>{count}</p>\n}\n```\n\n## Parameters\n\n| Name     | Description       | Type     |\n| -------- | ----------------- | -------- |\n| callback | callback function | Function |\n| delay    | interval delay    | Number   |\n"}}},function Basic(){var delay=Object(dist.number)("delay",1e3,{min:0,max:1e4,step:100}),_React$useState=react_default.a.useState(0),_React$useState2=Object(slicedToArray.a)(_React$useState,2),count=_React$useState2[0],setCount=_React$useState2[1];return Object(src.e)((function(){setCount(count+1)}),delay),react_default.a.createElement("p",null,count)});useInterval_stories_Basic.story={name:"Basic usage"},useInterval_stories_Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useInterval/useInterval.stories.js"]={name:"Basic",docgenInfo:useInterval_stories_Basic.__docgenInfo,path:"src/useInterval/useInterval.stories.js"})},327:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return useLocalStorage_stories_Text})),__webpack_require__.d(__webpack_exports__,"User",(function(){return useLocalStorage_stories_User})),__webpack_require__.d(__webpack_exports__,"Fruits",(function(){return useLocalStorage_stories_Fruits}));var toConsumableArray=__webpack_require__(335),objectSpread2=__webpack_require__(106),slicedToArray=__webpack_require__(7),react=__webpack_require__(0),react_default=__webpack_require__.n(react),src=__webpack_require__(13),useLocalStorage_stories_Text=(__webpack_exports__.default={title:"useLocalStorage",parameters:{readme:{sidebar:"# useLocalStorage\n\n> Similar to useState but first arg is key to the value in local storage.\n\n## Usage\n\n```jsx\nimport React from 'react'\n\nimport { useLocalStorage } from '@ttrmz/react-utils'\n\nconst Example = () => {\n  const [value, setValue] = useLocalStorage('key', 'initialValue')\n\n  return <input value={value} onChange={(e) => setValue(e.target.value)} />\n}\n```\n\n## Parameters\n\n| Name          | Description                 | Type   |\n| ------------- | --------------------------- | ------ |\n| key           | local storage key           | String |\n| initial value | local storage initial value | Any    |\n"}}},function Text(){var _useLocalStorage=Object(src.f)("UseLocalStorageString_demoKey",""),_useLocalStorage2=Object(slicedToArray.a)(_useLocalStorage,2),storedValue=_useLocalStorage2[0],setStoredValue=_useLocalStorage2[1];return react_default.a.createElement("div",null,react_default.a.createElement("input",{value:storedValue,onChange:function onChange(e){return setStoredValue(e.target.value)},placeholder:"type text here"}),react_default.a.createElement("button",{onClick:function onClick(){return setStoredValue("")}},"clear"),react_default.a.createElement("p",null,"LocalStorage : ",storedValue))});useLocalStorage_stories_Text.story={name:"Demo with input"};var useLocalStorage_stories_User=function User(){var INITIAL_LOCAL_STORAGE={name:"John",username:"Doe"},_useLocalStorage3=Object(src.f)("UseLocalStorageObject_demoKey",INITIAL_LOCAL_STORAGE),_useLocalStorage4=Object(slicedToArray.a)(_useLocalStorage3,2),storedValue=_useLocalStorage4[0],setStoredValue=_useLocalStorage4[1];return react_default.a.createElement("div",null,react_default.a.createElement("label",null,"Name",react_default.a.createElement("input",{value:storedValue.name,onChange:function onChange(e){return setStoredValue(Object(objectSpread2.a)(Object(objectSpread2.a)({},storedValue),{},{name:e.target.value}))}})),react_default.a.createElement("label",null,"Username",react_default.a.createElement("input",{value:storedValue.username,onChange:function onChange(e){return setStoredValue(Object(objectSpread2.a)(Object(objectSpread2.a)({},storedValue),{},{username:e.target.value}))}})),react_default.a.createElement("button",{onClick:function onClick(){setStoredValue(INITIAL_LOCAL_STORAGE)}},"reset"),react_default.a.createElement("p",null,"LocalStorage : ",JSON.stringify(storedValue)))};useLocalStorage_stories_User.story={name:"Demo with object"};var useLocalStorage_stories_Fruits=function Fruits(){var INITIAL_LOCAL_STORAGE=["apple","banana","peach","avocado","pineapple"],_useLocalStorage5=Object(src.f)("UseLocalStorageArray_demoKey",INITIAL_LOCAL_STORAGE),_useLocalStorage6=Object(slicedToArray.a)(_useLocalStorage5,2),storedValue=_useLocalStorage6[0],setStoredValue=_useLocalStorage6[1],_useInput=Object(src.d)(""),value=_useInput.value,onChange=_useInput.onChange,setValue=_useInput.setValue;return react_default.a.createElement("div",null,react_default.a.createElement("input",{value:value,onChange:onChange}),react_default.a.createElement("button",{onClick:function onClick(){setStoredValue([].concat(Object(toConsumableArray.a)(storedValue),[value])),setValue("")},disabled:!value||storedValue.includes(value)},"add"),react_default.a.createElement("button",{onClick:function onClick(){setStoredValue(INITIAL_LOCAL_STORAGE)}},"reset"),storedValue.map((function(fruit,index){return react_default.a.createElement("p",{key:index},fruit," ",react_default.a.createElement("button",{onClick:function onClick(){setStoredValue(storedValue.filter((function(curr){return curr!==fruit})))}},"remove")," ")})),react_default.a.createElement("p",null,"LocalStorage : ",JSON.stringify(storedValue)))};useLocalStorage_stories_Fruits.story={name:"Demo with array"},useLocalStorage_stories_Text.__docgenInfo={description:"",methods:[],displayName:"Text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useLocalStorage/useLocalStorage.stories.js"]={name:"Text",docgenInfo:useLocalStorage_stories_Text.__docgenInfo,path:"src/useLocalStorage/useLocalStorage.stories.js"}),useLocalStorage_stories_User.__docgenInfo={description:"",methods:[],displayName:"User"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useLocalStorage/useLocalStorage.stories.js"]={name:"User",docgenInfo:useLocalStorage_stories_User.__docgenInfo,path:"src/useLocalStorage/useLocalStorage.stories.js"}),useLocalStorage_stories_Fruits.__docgenInfo={description:"",methods:[],displayName:"Fruits"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useLocalStorage/useLocalStorage.stories.js"]={name:"Fruits",docgenInfo:useLocalStorage_stories_Fruits.__docgenInfo,path:"src/useLocalStorage/useLocalStorage.stories.js"})},336:function(module,exports,__webpack_require__){__webpack_require__(337),__webpack_require__(500),__webpack_require__(501),module.exports=__webpack_require__(766)},416:function(module,exports){},501:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(77),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(328),storybook_readme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(334),_package_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(200);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(storybook_readme__WEBPACK_IMPORTED_MODULE_3__.addReadme),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{theme:Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.create)({base:"light",brandTitle:_package_json__WEBPACK_IMPORTED_MODULE_4__.name,brandUrl:_package_json__WEBPACK_IMPORTED_MODULE_4__.repository.url}),panelPosition:"right"}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(__webpack_require__(765),module)}.call(this,__webpack_require__(243)(module))},765:function(module,exports,__webpack_require__){var map={"./useCopyToClipboard/useCopyToClipboard.stories.js":322,"./useDebounce/useDebounce.stories.js":323,"./useEventListener/useEventListener.stories.js":324,"./useInput/useInput.stories.js":325,"./useInterval/useInterval.stories.js":326,"./useLocalStorage/useLocalStorage.stories.js":327};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=765},766:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(77);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(767)],module)}.call(this,__webpack_require__(243)(module))},767:function(module,exports,__webpack_require__){var map={"./useCopyToClipboard/useCopyToClipboard.stories.js":322,"./useDebounce/useDebounce.stories.js":323,"./useEventListener/useEventListener.stories.js":324,"./useInput/useInput.stories.js":325,"./useInterval/useInterval.stories.js":326,"./useLocalStorage/useLocalStorage.stories.js":327};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=767}},[[336,1,2]]]);
//# sourceMappingURL=main.e0b9b243ecf2bd719ebe.bundle.js.map