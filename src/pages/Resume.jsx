import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'
export default function Resume() {

  const docs = [

    {
      uri: require("../Documents/My-Resume.pdf"),
      fileType: "pdf",
      fileName: "My-Resume",
      title: "My-Resume",

    },

  ];

  return (
    <>

      <Container   >
       
          <DocViewer  documents={docs} pluginRenderers={DocViewerRenderers}
            theme={{
              primary: "#5296d8",
              secondary: "#ffffff",
              tertiary: "#5296d899",
              textPrimary: "#ffffff",
              textSecondary: "#5296d8",
              textTertiary: "#00000099",
              disableThemeScrollbar: false,
            }}
            style={{
               height: 1000, 
               
               }}
          />
       
      </Container>
    </>
  )
}
