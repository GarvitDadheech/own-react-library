function customRenderer(element,container) {

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    domElement.setAttribute('href',element.props.href)
    domElement.setAttribute('target',element.props.target)

    container.appendChild(domElement);


}



const container = document.getElementById('root');

const element = {
    type : 'a',
    props : {
        href : 'https://www.x.com/gambishhhh',
        target : '_blank'
    },
    children : 'Visit my twitter account'
}

customRenderer(element,container)