import React from 'react'

function _layout(props) {
  return (
    <div>
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <div style={{ height: '0px' }}></div>
        <div
          style={{
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '100%',
              flexDirection: 'row',
              flex: undefined,
            }}
          >
            <div>index</div>
          </div>
        </div>
        <div>{...props.children}</div>
      </div>
    </div>
  )
}

export default _layout
