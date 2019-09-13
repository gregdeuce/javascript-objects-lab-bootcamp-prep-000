var recipes = ({breakfast: 'bread'})

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)  {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var clone = object[key] = value
  delete object[key]
  return object
}