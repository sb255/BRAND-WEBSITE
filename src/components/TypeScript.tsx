/*

Defining a function in TypeScript: 

type Options = {
  include?: string;
};

type Plugin = {
  name: string;
};

function viteReact(opts: Options = {}): Plugin[] {
  console.log(opts);

  return [
    { name: "react-jsx" },
    { name: "react-refresh" }
  ];
}


Which is equvalent to: 

function functionName(parameter: ParameterType = defaultValue): ReturnType {
  // Function body
}

*/

