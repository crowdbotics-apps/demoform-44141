import axios from "axios"
const demoformAPI = axios.create({
  baseURL: "https://demoform-44141.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return demoformAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return demoformAPI.post(`/api/v1/login/`, payload)
}
function api_v1_persondatamodel_list(payload) {
  return demoformAPI.get(`/api/v1/persondatamodel/`)
}
function api_v1_persondatamodel_create(payload) {
  return demoformAPI.post(`/api/v1/persondatamodel/`, payload)
}
function api_v1_persondatamodel_retrieve(payload) {
  return demoformAPI.get(`/api/v1/persondatamodel/${payload.id}/`)
}
function api_v1_persondatamodel_update(payload) {
  return demoformAPI.put(`/api/v1/persondatamodel/${payload.id}/`, payload)
}
function api_v1_persondatamodel_partial_update(payload) {
  return demoformAPI.patch(`/api/v1/persondatamodel/${payload.id}/`, payload)
}
function api_v1_persondatamodel_destroy(payload) {
  return demoformAPI.delete(`/api/v1/persondatamodel/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return demoformAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return demoformAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return demoformAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return demoformAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return demoformAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return demoformAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return demoformAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return demoformAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return demoformAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return demoformAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return demoformAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return demoformAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_persondatamodel_list,
  api_v1_persondatamodel_create,
  api_v1_persondatamodel_retrieve,
  api_v1_persondatamodel_update,
  api_v1_persondatamodel_partial_update,
  api_v1_persondatamodel_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
