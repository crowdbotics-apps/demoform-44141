import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_persondatamodel_list = createAsyncThunk(
  "personDataModels/api_v1_persondatamodel_list",
  async payload => {
    const response = await apiService.api_v1_persondatamodel_list(payload)
    return response.data
  }
)
export const api_v1_persondatamodel_create = createAsyncThunk(
  "personDataModels/api_v1_persondatamodel_create",
  async payload => {
    const response = await apiService.api_v1_persondatamodel_create(payload)
    return response.data
  }
)
export const api_v1_persondatamodel_retrieve = createAsyncThunk(
  "personDataModels/api_v1_persondatamodel_retrieve",
  async payload => {
    const response = await apiService.api_v1_persondatamodel_retrieve(payload)
    return response.data
  }
)
export const api_v1_persondatamodel_update = createAsyncThunk(
  "personDataModels/api_v1_persondatamodel_update",
  async payload => {
    const response = await apiService.api_v1_persondatamodel_update(payload)
    return response.data
  }
)
export const api_v1_persondatamodel_partial_update = createAsyncThunk(
  "personDataModels/api_v1_persondatamodel_partial_update",
  async payload => {
    const response = await apiService.api_v1_persondatamodel_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_persondatamodel_destroy = createAsyncThunk(
  "personDataModels/api_v1_persondatamodel_destroy",
  async payload => {
    const response = await apiService.api_v1_persondatamodel_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const personDataModelsSlice = createSlice({
  name: "personDataModels",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_persondatamodel_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_persondatamodel_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_persondatamodel_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_persondatamodel_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_persondatamodel_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_persondatamodel_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_persondatamodel_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_persondatamodel_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_persondatamodel_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_persondatamodel_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_persondatamodel_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_persondatamodel_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_persondatamodel_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_persondatamodel_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_persondatamodel_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_persondatamodel_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_persondatamodel_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_persondatamodel_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_persondatamodel_list,
  api_v1_persondatamodel_create,
  api_v1_persondatamodel_retrieve,
  api_v1_persondatamodel_update,
  api_v1_persondatamodel_partial_update,
  api_v1_persondatamodel_destroy,
  slice: personDataModelsSlice
}
