export default function getInstanceProperties(instance: Object, stop = Object.prototype) {
  const methods: string[] = [];
  let prototype = Object.getPrototypeOf(instance);
  while (prototype && prototype !== stop) {
    Object.getOwnPropertyNames(prototype).forEach(method => {
      if (method !== "constructor") {
        methods.push(method);
      }
    });
    prototype = Object.getPrototypeOf(prototype);
  }
  return methods;
}
