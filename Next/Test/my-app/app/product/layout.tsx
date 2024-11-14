import React from 'react'

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="product-layout">
      {children}
      <div>
        <h1>Product Layout</h1>
      </div>
    </div>
  )
}
