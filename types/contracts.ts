import {Entity} from "./entity";
import {ApiResponse} from "./api";


export type ContractData = {
    shot: string;
}

export type Contract = ContractData & Entity


export type ApiContract = {
    "id": 0,
    "attributes": {
        "user": {
            "data": {
                "id": 0,
                "attributes": {
                    "username": "string",
                    "email": "user@example.com",
                    "provider": "string",
                    "resetPasswordToken": "string",
                    "confirmationToken": "string",
                    "confirmed": true,
                    "blocked": true,
                    "role": {
                        "data": {
                            "id": 0,
                            "attributes": {
                                "name": "string",
                                "description": "string",
                                "type": "string",
                                "permissions": {
                                    "data": [
                                        {
                                            "id": 0,
                                            "attributes": {
                                                "action": "string",
                                                "role": {
                                                    "data": {
                                                        "id": 0,
                                                        "attributes": {}
                                                    }
                                                },
                                                "createdAt": "2023-01-22T14:33:54.183Z",
                                                "updatedAt": "2023-01-22T14:33:54.183Z",
                                                "createdBy": {
                                                    "data": {
                                                        "id": 0,
                                                        "attributes": {
                                                            "firstname": "string",
                                                            "lastname": "string",
                                                            "username": "string",
                                                            "email": "user@example.com",
                                                            "resetPasswordToken": "string",
                                                            "registrationToken": "string",
                                                            "isActive": true,
                                                            "roles": {
                                                                "data": [
                                                                    {
                                                                        "id": 0,
                                                                        "attributes": {
                                                                            "name": "string",
                                                                            "code": "string",
                                                                            "description": "string",
                                                                            "users": {
                                                                                "data": [
                                                                                    {
                                                                                        "id": 0,
                                                                                        "attributes": {}
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "permissions": {
                                                                                "data": [
                                                                                    {
                                                                                        "id": 0,
                                                                                        "attributes": {
                                                                                            "action": "string",
                                                                                            "subject": "string",
                                                                                            "properties": "string",
                                                                                            "conditions": "string",
                                                                                            "role": {
                                                                                                "data": {
                                                                                                    "id": 0,
                                                                                                    "attributes": {}
                                                                                                }
                                                                                            },
                                                                                            "createdAt": "2023-01-22T14:33:54.183Z",
                                                                                            "updatedAt": "2023-01-22T14:33:54.183Z",
                                                                                            "createdBy": {
                                                                                                "data": {
                                                                                                    "id": 0,
                                                                                                    "attributes": {}
                                                                                                }
                                                                                            },
                                                                                            "updatedBy": {
                                                                                                "data": {
                                                                                                    "id": 0,
                                                                                                    "attributes": {}
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "createdAt": "2023-01-22T14:33:54.183Z",
                                                                            "updatedAt": "2023-01-22T14:33:54.183Z",
                                                                            "createdBy": {
                                                                                "data": {
                                                                                    "id": 0,
                                                                                    "attributes": {}
                                                                                }
                                                                            },
                                                                            "updatedBy": {
                                                                                "data": {
                                                                                    "id": 0,
                                                                                    "attributes": {}
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            "blocked": true,
                                                            "preferedLanguage": "string",
                                                            "createdAt": "2023-01-22T14:33:54.183Z",
                                                            "updatedAt": "2023-01-22T14:33:54.183Z",
                                                            "createdBy": {
                                                                "data": {
                                                                    "id": 0,
                                                                    "attributes": {}
                                                                }
                                                            },
                                                            "updatedBy": {
                                                                "data": {
                                                                    "id": 0,
                                                                    "attributes": {}
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "updatedBy": {
                                                    "data": {
                                                        "id": 0,
                                                        "attributes": {}
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                },
                                "users": {
                                    "data": [
                                        {
                                            "id": 0,
                                            "attributes": {}
                                        }
                                    ]
                                },
                                "createdAt": "2023-01-22T14:33:54.183Z",
                                "updatedAt": "2023-01-22T14:33:54.183Z",
                                "createdBy": {
                                    "data": {
                                        "id": 0,
                                        "attributes": {}
                                    }
                                },
                                "updatedBy": {
                                    "data": {
                                        "id": 0,
                                        "attributes": {}
                                    }
                                }
                            }
                        }
                    },
                    "createdAt": "2023-01-22T14:33:54.183Z",
                    "updatedAt": "2023-01-22T14:33:54.183Z",
                    "createdBy": {
                        "data": {
                            "id": 0,
                            "attributes": {}
                        }
                    },
                    "updatedBy": {
                        "data": {
                            "id": 0,
                            "attributes": {}
                        }
                    }
                }
            }
        },
        "docs": {
            "data": [
                {
                    "id": 0,
                    "attributes": {
                        "name": "string",
                        "alternativeText": "string",
                        "caption": "string",
                        "width": 0,
                        "height": 0,
                        "formats": "string",
                        "hash": "string",
                        "ext": "string",
                        "mime": "string",
                        "size": 0,
                        "url": "string",
                        "previewUrl": "string",
                        "provider": "string",
                        "provider_metadata": "string",
                        "related": {
                            "data": [
                                {
                                    "id": 0,
                                    "attributes": {}
                                }
                            ]
                        },
                        "folder": {
                            "data": {
                                "id": 0,
                                "attributes": {
                                    "name": "string",
                                    "pathId": 0,
                                    "parent": {
                                        "data": {
                                            "id": 0,
                                            "attributes": {}
                                        }
                                    },
                                    "children": {
                                        "data": [
                                            {
                                                "id": 0,
                                                "attributes": {}
                                            }
                                        ]
                                    },
                                    "files": {
                                        "data": [
                                            {
                                                "id": 0,
                                                "attributes": {
                                                    "name": "string",
                                                    "alternativeText": "string",
                                                    "caption": "string",
                                                    "width": 0,
                                                    "height": 0,
                                                    "formats": "string",
                                                    "hash": "string",
                                                    "ext": "string",
                                                    "mime": "string",
                                                    "size": 0,
                                                    "url": "string",
                                                    "previewUrl": "string",
                                                    "provider": "string",
                                                    "provider_metadata": "string",
                                                    "related": {
                                                        "data": [
                                                            {
                                                                "id": 0,
                                                                "attributes": {}
                                                            }
                                                        ]
                                                    },
                                                    "folder": {
                                                        "data": {
                                                            "id": 0,
                                                            "attributes": {}
                                                        }
                                                    },
                                                    "folderPath": "string",
                                                    "createdAt": "2023-01-22T14:33:54.183Z",
                                                    "updatedAt": "2023-01-22T14:33:54.183Z",
                                                    "createdBy": {
                                                        "data": {
                                                            "id": 0,
                                                            "attributes": {
                                                                "firstname": "string",
                                                                "lastname": "string",
                                                                "username": "string",
                                                                "email": "user@example.com",
                                                                "resetPasswordToken": "string",
                                                                "registrationToken": "string",
                                                                "isActive": true,
                                                                "roles": {
                                                                    "data": [
                                                                        {
                                                                            "id": 0,
                                                                            "attributes": {
                                                                                "name": "string",
                                                                                "code": "string",
                                                                                "description": "string",
                                                                                "users": {
                                                                                    "data": [
                                                                                        {
                                                                                            "id": 0,
                                                                                            "attributes": {}
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "permissions": {
                                                                                    "data": [
                                                                                        {
                                                                                            "id": 0,
                                                                                            "attributes": {
                                                                                                "action": "string",
                                                                                                "subject": "string",
                                                                                                "properties": "string",
                                                                                                "conditions": "string",
                                                                                                "role": {
                                                                                                    "data": {
                                                                                                        "id": 0,
                                                                                                        "attributes": {}
                                                                                                    }
                                                                                                },
                                                                                                "createdAt": "2023-01-22T14:33:54.183Z",
                                                                                                "updatedAt": "2023-01-22T14:33:54.183Z",
                                                                                                "createdBy": {
                                                                                                    "data": {
                                                                                                        "id": 0,
                                                                                                        "attributes": {}
                                                                                                    }
                                                                                                },
                                                                                                "updatedBy": {
                                                                                                    "data": {
                                                                                                        "id": 0,
                                                                                                        "attributes": {}
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "createdAt": "2023-01-22T14:33:54.183Z",
                                                                                "updatedAt": "2023-01-22T14:33:54.183Z",
                                                                                "createdBy": {
                                                                                    "data": {
                                                                                        "id": 0,
                                                                                        "attributes": {}
                                                                                    }
                                                                                },
                                                                                "updatedBy": {
                                                                                    "data": {
                                                                                        "id": 0,
                                                                                        "attributes": {}
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                "blocked": true,
                                                                "preferedLanguage": "string",
                                                                "createdAt": "2023-01-22T14:33:54.183Z",
                                                                "updatedAt": "2023-01-22T14:33:54.183Z",
                                                                "createdBy": {
                                                                    "data": {
                                                                        "id": 0,
                                                                        "attributes": {}
                                                                    }
                                                                },
                                                                "updatedBy": {
                                                                    "data": {
                                                                        "id": 0,
                                                                        "attributes": {}
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "updatedBy": {
                                                        "data": {
                                                            "id": 0,
                                                            "attributes": {}
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "path": "string",
                                    "createdAt": "2023-01-22T14:33:54.183Z",
                                    "updatedAt": "2023-01-22T14:33:54.183Z",
                                    "createdBy": {
                                        "data": {
                                            "id": 0,
                                            "attributes": {}
                                        }
                                    },
                                    "updatedBy": {
                                        "data": {
                                            "id": 0,
                                            "attributes": {}
                                        }
                                    }
                                }
                            }
                        },
                        "folderPath": "string",
                        "createdAt": "2023-01-22T14:33:54.183Z",
                        "updatedAt": "2023-01-22T14:33:54.183Z",
                        "createdBy": {
                            "data": {
                                "id": 0,
                                "attributes": {}
                            }
                        },
                        "updatedBy": {
                            "data": {
                                "id": 0,
                                "attributes": {}
                            }
                        }
                    }
                }
            ]
        },
        "doctor": {
            "data": {
                "id": 0,
                "attributes": {}
            }
        },
        "createdAt": "2023-01-22T14:33:54.183Z",
        "updatedAt": "2023-01-22T14:33:54.183Z",
        "createdBy": {
            "data": {
                "id": 0,
                "attributes": {}
            }
        },
        "updatedBy": {
            "data": {
                "id": 0,
                "attributes": {}
            }
        }
    }
}

export type CreateContractPayload = {
    docs: any[]
}

export type GetContractsResponse = ApiResponse<ApiContract[]>
export type CreateContractResponse = ApiResponse<ApiContract>