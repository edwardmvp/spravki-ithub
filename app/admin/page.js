import React from 'react'

import getReferences from '../../libs/getReferences';



export default async function AdminPage() {

    const dataSource = await getReferences()

    return (
        <div className=''>


        </div>
    )
}
