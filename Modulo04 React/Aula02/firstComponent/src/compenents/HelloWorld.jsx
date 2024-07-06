import classes from './HelloWord.module.css'

const teste = 'String dentro da const teste para teste'

function HelloWorld(){
    return (
        <div style="margin: 0 2rem">
            <h1 className={classes.HelloWorldH1}>Hello World!</h1>
            <h3>Hello World!!!</h3>
            <h5>Hello World!!!!!</h5>
            <p>Hello World...</p>
            <p><strong>{teste}</strong></p>
        </div>
    )
}

export default HelloWorld