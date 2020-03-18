import React from 'react'

const ListUnicorns = ({ unicorns, deleteUnicorn }) => (
    <ul>
      {
        unicorns &&
        unicorns.length > 0 ?
            (
              unicorns.map(unicorn => (
              <li key={unicorn._id} onClick={() => deleteUnicorn(unicorn._id)}>{unicorn.name}{unicorn.color}</li>
                ))
            )
            :
            (
              <li>No unicorn(s) left</li>
            )
      }
    </ul>
  )

export default ListUnicorns