# TS_DEV

## setting up tsc
    npm init --y => creates a package.json
    npm i -D typescript => creates lock.json and node_modules
    npx tsc --init => initilizes ts.config

## Type annotation and Type inferencing
    * Type inferencing
        let a = "Hello"
        a = 42 => error, as ts automatically detects a as string

        let b = (true) ? 10 : "a string content"
        b can be of a number or a string based on condition

    * Type annotation
        specifically determining the type
        let a:string = "string content"
        a = "Changed string content"    =>  allowed as changed into string only
        a = 42 not allowed

        annotations => :number, :string, :boolean

## Union and any
    * Union 
        const id: number | string;
        id = 23
        id = "23"
        id will accept both. 

        const status: '404' | '301' | '200'
        now status cannot have any values other than '404' '301' '200'
        not even in strings (if other)
        
    * any
        it will accept any values whether its number boolean string anything
        avoid using it

    * undefined with union
        when not sure if the data exist or not
        const response : 'string' | undefined
