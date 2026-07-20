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
