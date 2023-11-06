import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_demoformmodel_list = createAsyncThunk(
  "demoFormModels/api_v1_demoformmodel_list",
  async payload => {
    const response = await apiService.api_v1_demoformmodel_list(payload)
    return response.data
  }
)
export const api_v1_demoformmodel_create = createAsyncThunk(
  "demoFormModels/api_v1_demoformmodel_create",
  async payload => {
    const response = await apiService.api_v1_demoformmodel_create(payload)
    return response.data
  }
)
export const api_v1_demoformmodel_retrieve = createAsyncThunk(
  "demoFormModels/api_v1_demoformmodel_retrieve",
  async payload => {
    const response = await apiService.api_v1_demoformmodel_retrieve(payload)
    return response.data
  }
)
export const api_v1_demoformmodel_update = createAsyncThunk(
  "demoFormModels/api_v1_demoformmodel_update",
  async payload => {
    const response = await apiService.api_v1_demoformmodel_update(payload)
    return response.data
  }
)
export const api_v1_demoformmodel_partial_update = createAsyncThunk(
  "demoFormModels/api_v1_demoformmodel_partial_update",
  async payload => {
    const response = await apiService.api_v1_demoformmodel_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_demoformmodel_destroy = createAsyncThunk(
  "demoFormModels/api_v1_demoformmodel_destroy",
  async payload => {
    const response = await apiService.api_v1_demoformmodel_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const demoFormModelsSlice = createSlice({
  name: "demoFormModels",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_demoformmodel_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_demoformmodel_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_demoformmodel_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_demoformmodel_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_demoformmodel_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_demoformmodel_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_demoformmodel_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_demoformmodel_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_demoformmodel_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_demoformmodel_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_demoformmodel_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_demoformmodel_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_demoformmodel_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_demoformmodel_partial_update.fulfilled,
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
        api_v1_demoformmodel_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_demoformmodel_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_demoformmodel_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_demoformmodel_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_demoformmodel_list,
  api_v1_demoformmodel_create,
  api_v1_demoformmodel_retrieve,
  api_v1_demoformmodel_update,
  api_v1_demoformmodel_partial_update,
  api_v1_demoformmodel_destroy,
  slice: demoFormModelsSlice
}
