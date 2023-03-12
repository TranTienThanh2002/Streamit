import React from 'react'
import { Breadcrumb } from '../../components/breadcrumb/breadcrumb'
import { FormContact } from '../formContact/formContact'

export const ContactPage = () => {
  return (
    <>
        <section className="contact">
            <Breadcrumb active="Contact"/>
            <FormContact/>
        </section>
    </>
  )
}
