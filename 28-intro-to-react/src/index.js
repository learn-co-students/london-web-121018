const Article = props => {
  return React.createElement('div', { className: 'article' }, [
    React.createElement('h1', { className: 'header' }, props.title),
    React.createElement('p', { className: 'body' }, props.text)
  ]);
};

const Article = props => {
  return <div><h1>{props.title}</h1><p>{props.text}</p></div>;
}

ReactDOM.render(  
  Article({title: 'my fancy article about react' , text: 'just go back to jQuery'}),
  document.querySelector('#main')
);
