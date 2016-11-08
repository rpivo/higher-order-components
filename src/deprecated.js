import React from 'react'

const deprecate = ({name, useInstead, readMore}) =>
  console && console.error &&
  console.error(
    `Warning: '${name}' is deprecated and will be removed in the next major version.` +
    (useInstead ? `\nUse '${useInstead}' instead.` : '') +
    (readMore ? `\nRead more on ${readMore}` : '')
  )

export default ({name, useInstead, readMore}) => (Target) => {
  function Deprecated (props) {
    deprecate({
      name: name || Target.displayName || Target.name,
      useInstead,
      readMore
    })

    return <Target {...props} />
  }

  Deprecated.displayName = Target.displayName || Target.name

  return Deprecated
}
