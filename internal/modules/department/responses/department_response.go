package responses

import (
	departmentModels "resedist/internal/modules/department/models"
)

type Department struct {
	ID             uint
	Title          string
	DepartmentType string
	Parent         string
}

type Departments struct {
	Data []Department
}

func ToDepartment(article departmentModels.Department) Department {
	return Department{
		ID:    article.ID,
		Title: article.Title,
	}
}

func ToDepartments(departments []departmentModels.Department) Departments {
	var response Departments

	for _, department := range departments {
		response.Data = append(response.Data, ToDepartment(department))
	}

	return response
}
