export interface InputCM {
    data: Daum[]
}

export interface Daum {
  id?: string
  key?: string
  label?: string
  widget?: string
  service?: string
  rolld?: string
  order?: number
  isAdvanced?: any[]
  keyCombo?: any[]
  labelCombo?: any[]
  success?: boolean
  errors?: any[]
  lastUpdate?: string
  pagination?: Pagination
}

export interface Pagination {
  currentPage: number
  totalltems: number
  totalPages: number
  pageSize: number
}
