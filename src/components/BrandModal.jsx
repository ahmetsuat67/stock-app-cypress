import React from "react"
import { flexColumn, modalStyle } from "../styles/globalStyles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"
import useStockCall from "../hooks/useStockCall"

export default function BrandModal({ open, setOpen, info, setInfo }) {
  const { postStockData, putStockData } = useStockCall()

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setOpen(false)
    if (info.id) {
      putStockData("brands", info)
    } else {
      postStockData("brands", info)
    }
    setInfo({})
  }

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false)
        setInfo({})
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box sx={flexColumn} component={"form"} onSubmit={handleSubmit}>
          <TextField
            data-test="brandsName"
            label="Brand Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={info?.name || ""}
            onChange={handleChange}
            required
          />

          <TextField
            data-test="brandsImage"
            label="Image Url"
            name="image"
            id="image"
            type="url"
            variant="outlined"
            value={info?.image || ""}
            onChange={handleChange}
          />

          <Button data-test="brandsSbmt" type="submit" variant="contained" size="large">
            Save Brand
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
