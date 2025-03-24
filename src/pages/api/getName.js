import axios from 'axios';
import UserAgent from 'user-agents';
import { JSDOM } from 'jsdom';

export async function POST({ request, url }) {
	const jsessionId = url.searchParams.get('jsessionid');
	const link =
		'https://aspen.cpsd.us/aspen/portalStudentDetail.do?navkey=myInfo.details.detail';

	const headers = {
		Cookie: `JSESSIONID=${jsessionId}`,
		'User-Agent': new UserAgent({ deviceCategory: 'desktop' })
			.random()
			.toString()
	};

	try {
		const response = await axios.get(link, { headers });
		const name = getJSONPath(
			htmlToJson(response.data),
			[1, 2, 11, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0]
		);
		const yearOfGrade = getJSONPath(
			htmlToJson(response.data),
			[
				1, 2, 11, 0, 1, 0, 0, 1, 0, 0, 1, 6, 0, 2, 0, 11, 0, 0, 0, 1, 0,
				0, 3, 1, 0, 0, 1
			] // this is maybe one off, check again
		);
		/*
            {
  "tag": "html",
  "attributes": {
    
  },
  "children": [
    {
      "tag": "head",
      "attributes": {
        
      },
      "children": [
        {
          "tag": "meta",
          "attributes": {
            "http-equiv": "X-UA-Compatible",
            "content": "IE=Edge"
          },
          "children": [
            
          ]
        },
        {
          "tag": "meta",
          "attributes": {
            "http-equiv": "Content-Type",
            "content": "text/html; charset=utf-8"
          },
          "children": [
            
          ]
        },
        {
          "tag": "link",
          "attributes": {
            "rel": "SHORTCUT ICON",
            "href": "images/favicon.ico"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/external/lodash/lodash.3.8.0.compat.min.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/external/json/json2.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/external/jquery/jquery-3.5.1.min.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/jquery-ui-1.12.1.min.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/external/quicktags/quicktags-1.3.1-concat.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/jquery-common.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/common.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/hoverText.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/menu.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/locale/date-en-US.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/dateTime.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/dependencyHandler.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/dynamicPickList.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/resourceGrabber.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/spellCheckField.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/messageWindow.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/help.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/grid.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/commentBank.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/modules/seatingChartDesign.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "ckeditor/ckeditor.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/ckEditorSetup.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "language": "JavaScript"
          },
          "children": [
            {
              "text": "window.name = \"root_aspen_window\";\nSYSTEM_LOCALE = 'en_US';\nincludeStylesheet('student');\nsessionId = 'qz3nsOOklsU4OpNx3KpaW3AcwbmzAdQH-SNW6e8A';\nresetSessionTimeout( 5100 );\nsessionTimeoutMessage1 = 'Your session will expire in less than one minute.';\nsessionTimeoutMessage2 = 'Would you like to continue with your session?';\nsessionExpiredMessage = 'Your session has expired at';\nupdateSessionTimeout();\nfunction onLoad()\n{\nmakeTabsClickable();\nscrollToCoordinates();\nif (this.resizeFrames)\n{\nresizeFrames();\n}\nif (this.updateCheckboxViews)\n{\nupdateCheckboxViews();\n}\n\n}"
            }
          ]
        },
        {
          "tag": "title",
          "attributes": {
            
          },
          "children": [
            {
              "text": "Aspen: My Record"
            }
          ]
        },
        {
          "tag": "script",
          "attributes": {
            
          },
          "children": [
            {
              "text": "var trackAnalytics = false;\n\nvar analyticUserView = 'Student view';\nvar analyticUserRole = 'Student';\nvar districtName = 'Cambridge Public Schools';\n\nvar aspenVersion = '6.9.0.6.94';"
            }
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "src": "js/analyticsCore.js?version=6.9.0.6.94",
            "type": "text/javascript"
          },
          "children": [
            
          ]
        }
      ]
    },
    {
      "tag": "body",
      "attributes": {
        "class": "bodyBackground",
        "onload": "onLoad()"
      },
      "children": [
        {
          "tag": "div",
          "attributes": {
            "id": "overlay",
            "style": "display: none; z-index: 500; position: fixed; left: 0; right: 0; bottom: 0; top: 0; background-color: rgba(0,0,0,0.5);"
          },
          "children": [
            
          ]
        },
        {
          "tag": "div",
          "attributes": {
            "id": "spellingMenu",
            "class": "suggestionMenu spellCheckBackground"
          },
          "children": [
            
          ]
        },
        {
          "tag": "form",
          "attributes": {
            "name": "genericDetailForm",
            "method": "post",
            "action": "/aspen/portalStudentDetail.do"
          },
          "children": [
            {
              "tag": "div",
              "attributes": {
                
              },
              "children": [
                {
                  "tag": "input",
                  "attributes": {
                    "type": "hidden",
                    "name": "org.apache.struts.taglib.html.TOKEN",
                    "value": "27b4ae07f1496a62ec06d69466d765ca"
                  },
                  "children": [
                    
                  ]
                }
              ]
            },
            {
              "tag": "input",
              "attributes": {
                "type": "hidden",
                "id": "userEvent",
                "name": "userEvent",
                "value": "930"
              },
              "children": [
                
              ]
            },
            {
              "tag": "input",
              "attributes": {
                "type": "hidden",
                "id": "userParam",
                "name": "userParam",
                "value": ""
              },
              "children": [
                
              ]
            },
            {
              "tag": "input",
              "attributes": {
                "type": "hidden",
                "id": "operationId",
                "name": "operationId",
                "value": ""
              },
              "children": [
                
              ]
            },
            {
              "tag": "input",
              "attributes": {
                "type": "hidden",
                "id": "deploymentId",
                "name": "deploymentId",
                "value": "ma-cambridge"
              },
              "children": [
                
              ]
            },
            {
              "tag": "input",
              "attributes": {
                "type": "hidden",
                "id": "scrollX",
                "name": "scrollX",
                "value": "0"
              },
              "children": [
                
              ]
            },
            {
              "tag": "input",
              "attributes": {
                "type": "hidden",
                "id": "scrollY",
                "name": "scrollY",
                "value": "0"
              },
              "children": [
                
              ]
            },
            {
              "tag": "input",
              "attributes": {
                "type": "hidden",
                "id": "formFocusField",
                "name": "formFocusField",
                "value": ""
              },
              "children": [
                
              ]
            },
            {
              "tag": "input",
              "attributes": {
                "type": "hidden",
                "name": "formContents",
                "value": ""
              },
              "children": [
                
              ]
            },
            {
              "tag": "input",
              "attributes": {
                "type": "hidden",
                "name": "formContentsDirty",
                "value": ""
              },
              "children": [
                
              ]
            },
            {
              "tag": "input",
              "attributes": {
                "type": "hidden",
                "name": "maximized",
                "value": "false"
              },
              "children": [
                
              ]
            },
            {
              "tag": "table",
              "attributes": {
                "width": "100%",
                "border": "0",
                "cellspacing": "0",
                "cellpadding": "0"
              },
              "children": [
                {
                  "tag": "tbody",
                  "attributes": {
                    
                  },
                  "children": [
                    {
                      "tag": "tr",
                      "attributes": {
                        "class": "layoutHeader",
                        "id": "layoutHeader"
                      },
                      "children": [
                        {
                          "tag": "td",
                          "attributes": {
                            "id": "header"
                          },
                          "children": [
                            {
                              "tag": "table",
                              "attributes": {
                                "width": "100%",
                                "border": "0",
                                "cellspacing": "0",
                                "cellpadding": "0"
                              },
                              "children": [
                                {
                                  "tag": "tbody",
                                  "attributes": {
                                    
                                  },
                                  "children": [
                                    {
                                      "tag": "tr",
                                      "attributes": {
                                        
                                      },
                                      "children": [
                                        {
                                          "tag": "td",
                                          "attributes": {
                                            
                                          },
                                          "children": [
                                            {
                                              "tag": "div",
                                              "attributes": {
                                                "id": "topTitleBar",
                                                "style": ""
                                              },
                                              "children": [
                                                {
                                                  "tag": "iframe",
                                                  "attributes": {
                                                    "id": "downloadFrame",
                                                    "src": "javascript:false;",
                                                    "style": "display: none"
                                                  },
                                                  "children": [
                                                    
                                                  ]
                                                },
                                                {
                                                  "tag": "script",
                                                  "attributes": {
                                                    "language": "Javascript"
                                                  },
                                                  "children": [
                                                    {
                                                      "text": "function confirmLogout()\n{\nif (confirm('Do you really want to log off and end your session?'))\n{\nwindow.open('logout.do', '_top');\n}\n}"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "tag": "table",
                                                  "attributes": {
                                                    "width": "100%",
                                                    "border": "0",
                                                    "cellpadding": "0",
                                                    "cellspacing": "0",
                                                    "height": "55px",
                                                    "style": "float:left;"
                                                  },
                                                  "children": [
                                                    {
                                                      "tag": "tbody",
                                                      "attributes": {
                                                        
                                                      },
                                                      "children": [
                                                        {
                                                          "tag": "tr",
                                                          "attributes": {
                                                            
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "valign": "top",
                                                                "width": "50%"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "table",
                                                                  "attributes": {
                                                                    "cellpadding": "0",
                                                                    "cellspacing": "0",
                                                                    "border": "0",
                                                                    "style": "height: 100%;"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "tbody",
                                                                      "attributes": {
                                                                        
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "tr",
                                                                          "attributes": {
                                                                            "valign": "top"
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "tag": "td",
                                                                              "attributes": {
                                                                                "rowspan": "1",
                                                                                "class": "applicationTitle lightTitle",
                                                                                "style": "vertical-align: middle",
                                                                                "valign": "middle"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "span",
                                                                                  "attributes": {
                                                                                    "style": "padding-left: 10px;"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "Cambridge Public Schools 2024-2025"
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        },
                                                                        {
                                                                          "tag": "tr",
                                                                          "attributes": {
                                                                            
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "tag": "td",
                                                                              "attributes": {
                                                                                "class": "applicationSubtitle lightTitle"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "span",
                                                                                  "attributes": {
                                                                                    "style": "padding-left: 10px;"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "Glorioso, Leonardo"
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "align": "center"
                                                              },
                                                              "children": [
                                                                
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "align": "right",
                                                                "width": "40%"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "div",
                                                                  "attributes": {
                                                                    "style": "float: right;"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "table",
                                                                      "attributes": {
                                                                        "border": "0",
                                                                        "cellspacing": "0",
                                                                        "cellpadding": "0",
                                                                        "style": "margin-left: auto; margin-right: auto"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "tbody",
                                                                          "attributes": {
                                                                            
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "tag": "tr",
                                                                              "attributes": {
                                                                                
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "table",
                                                                                      "attributes": {
                                                                                        "border": "0",
                                                                                        "cellspacing": "0",
                                                                                        "cellpadding": "0"
                                                                                      },
                                                                                      "children": [
                                                                                        {
                                                                                          "tag": "tbody",
                                                                                          "attributes": {
                                                                                            
                                                                                          },
                                                                                          "children": [
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "div",
                                                                                                      "attributes": {
                                                                                                        "id": "userPreferenceMenu",
                                                                                                        "class": "toolbarText pointer toolbarItem",
                                                                                                        "tabindex": "0"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Glorioso, Leonardo"
                                                                                                        },
                                                                                                        {
                                                                                                          "tag": "img",
                                                                                                          "attributes": {
                                                                                                            "src": "images/white_down_arrow.png",
                                                                                                            "class": "whiteDownArrow"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "div",
                                                                                                      "attributes": {
                                                                                                        "id": "userPreferenceMenuPane",
                                                                                                        "class": "menuPane menuPlainBackground c2Border-left"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "table",
                                                                                                          "attributes": {
                                                                                                            "border": "0",
                                                                                                            "cellspacing": "0",
                                                                                                            "cellpadding": "0"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "tag": "tbody",
                                                                                                              "attributes": {
                                                                                                                
                                                                                                              },
                                                                                                              "children": [
                                                                                                                {
                                                                                                                  "tag": "tr",
                                                                                                                  "attributes": {
                                                                                                                    "id": "userPreferenceContext",
                                                                                                                    "tabindex": "0"
                                                                                                                  },
                                                                                                                  "children": [
                                                                                                                    {
                                                                                                                      "tag": "td",
                                                                                                                      "attributes": {
                                                                                                                        "nowrap": "",
                                                                                                                        "class": "menuOptionFullPadding"
                                                                                                                      },
                                                                                                                      "children": [
                                                                                                                        {
                                                                                                                          "text": "Set preferences"
                                                                                                                        }
                                                                                                                      ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                      "tag": "td",
                                                                                                                      "attributes": {
                                                                                                                        "nowrap": "",
                                                                                                                        "class": "menuOptionFullPadding",
                                                                                                                        "width": "1",
                                                                                                                        "align": "right"
                                                                                                                      },
                                                                                                                      "children": [
                                                                                                                        
                                                                                                                      ]
                                                                                                                    }
                                                                                                                  ]
                                                                                                                }
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "script",
                                                                                  "attributes": {
                                                                                    "language": "Javascript"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "var userPreferenceMenu = new Menu('userPreferenceMenu', null, 'menuItemHighlight pointer', 'pointer');\nuserPreferenceMenu.addOption('userPreferenceContext', 'doNamedPopup(\\'userPreferences.do\\',\\'500\\',\\'450\\',\\'preferencesPopup\\',\\'scrollbars=1,resizable=1,menubar=0,location=0\\');');"
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "div",
                                                                                      "attributes": {
                                                                                        "class": "toolbarPadding toolbarItem",
                                                                                        "nowrap": "",
                                                                                        "onmouseover": "this.className = 'toolbarPadding toolbarItem c2Background'",
                                                                                        "onmouseout": "this.className = 'toolbarPadding toolbarItem'"
                                                                                      },
                                                                                      "children": [
                                                                                        {
                                                                                          "tag": "a",
                                                                                          "attributes": {
                                                                                            "href": "javascript:confirmLogout();",
                                                                                            "class": "toolbarText"
                                                                                          },
                                                                                          "children": [
                                                                                            {
                                                                                              "tag": "span",
                                                                                              "attributes": {
                                                                                                "class": "fa fa-sign-out",
                                                                                                "style": "padding-right:5px;"
                                                                                              },
                                                                                              "children": [
                                                                                                
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "text": "Log Off"
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "tag": "tr",
                                      "attributes": {
                                        
                                      },
                                      "children": [
                                        {
                                          "tag": "td",
                                          "attributes": {
                                            
                                          },
                                          "children": [
                                            {
                                              "tag": "div",
                                              "attributes": {
                                                "id": "c2colorRef",
                                                "class": "c2color"
                                              },
                                              "children": [
                                                
                                              ]
                                            },
                                            {
                                              "tag": "div",
                                              "attributes": {
                                                "id": "topMenuBar",
                                                "style": ""
                                              },
                                              "children": [
                                                {
                                                  "tag": "div",
                                                  "attributes": {
                                                    "id": "topMenuBarLeft",
                                                    "class": "topMenuLeftScroll"
                                                  },
                                                  "children": [
                                                    {
                                                      "tag": "img",
                                                      "attributes": {
                                                        "src": "images/previous-arrow-white-black-border.png",
                                                        "style": "color: transparent;"
                                                      },
                                                      "children": [
                                                        
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "tag": "div",
                                                  "attributes": {
                                                    "id": "actualTopMenuBar",
                                                    "class": "topMenuCenter"
                                                  },
                                                  "children": [
                                                    {
                                                      "tag": "table",
                                                      "attributes": {
                                                        "width": "100%",
                                                        "border": "0",
                                                        "cellpadding": "0",
                                                        "cellspacing": "0",
                                                        "style": "border-collapse: collapse;"
                                                      },
                                                      "children": [
                                                        {
                                                          "tag": "tbody",
                                                          "attributes": {
                                                            
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                
                                                              },
                                                              "children": [
                                                                
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          "tag": "tbody",
                                                          "attributes": {
                                                            "style": "display: inline-block"
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "id": "left-arrow-container",
                                                                    "class": "c1Background navTabBackground",
                                                                    "nowrap": "",
                                                                    "onmouseover": "this.className = 'navTabBackgroundHover'",
                                                                    "onmouseout": "this.className = 'navTabBackground c1Background'",
                                                                    "style": "display: none"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "div",
                                                                      "attributes": {
                                                                        "class": "arrowToLeft"
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          "tag": "tbody",
                                                          "attributes": {
                                                            "id": "topTabs",
                                                            "style": "width: 100%; display:inline-block; overflow:hidden"
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "style": "width: 80px; text-align: center;",
                                                                    "class": "c1Background navTabBackground",
                                                                    "nowrap": "",
                                                                    "onmouseover": "this.className = 'navTabBackgroundHover'",
                                                                    "onmouseout": "this.className = 'navTabBackground c1Background'"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "a",
                                                                      "attributes": {
                                                                        "href": "/aspen/home.do",
                                                                        "class": "navTab"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "text": "Pages"
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "navTabDividerSolid"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/spacer.gif",
                                                                        "height": "1",
                                                                        "width": "1",
                                                                        "alt": " "
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": " navTabBackgroundSelected",
                                                                    "nowrap": ""
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "a",
                                                                      "attributes": {
                                                                        "href": "/aspen/portalStudentDetail.do?navkey=myInfo.details.detail",
                                                                        "class": "navTab",
                                                                        "title": "My information tab"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "text": "My&nbsp;Info"
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "navTabDividerSolid"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/spacer.gif",
                                                                        "height": "1",
                                                                        "width": "1",
                                                                        "alt": " "
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "c1Background navTabBackground",
                                                                    "nowrap": "",
                                                                    "onmouseover": "this.className = 'navTabBackgroundHover '",
                                                                    "onmouseout": "this.className = 'navTabBackground c1Background'"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "a",
                                                                      "attributes": {
                                                                        "href": "/aspen/portalClassList.do?navkey=academics.classes.list",
                                                                        "class": "navTab",
                                                                        "title": "Academics tab"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "text": "Academics"
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "navTabDividerSolid"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/spacer.gif",
                                                                        "height": "1",
                                                                        "width": "1",
                                                                        "alt": " "
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "c1Background navTabBackground",
                                                                    "nowrap": "",
                                                                    "onmouseover": "this.className = 'navTabBackgroundHover '",
                                                                    "onmouseout": "this.className = 'navTabBackground c1Background'"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "a",
                                                                      "attributes": {
                                                                        "href": "/aspen/portalGroupList.do?navkey=extras.groups.list",
                                                                        "class": "navTab",
                                                                        "title": "Groups tab"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "text": "Groups"
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "navTabDividerSolid"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/spacer.gif",
                                                                        "height": "1",
                                                                        "width": "1",
                                                                        "alt": " "
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "c1Background navTabBackground",
                                                                    "nowrap": "",
                                                                    "onmouseover": "this.className = 'navTabBackgroundHover '",
                                                                    "onmouseout": "this.className = 'navTabBackground c1Background'"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "a",
                                                                      "attributes": {
                                                                        "href": "/aspen/planner.do?navkey=plannerCalendar.plannerView.planner",
                                                                        "class": "navTab",
                                                                        "title": "Calendar"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "text": "Calendar"
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "navTabDividerSolid"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/spacer.gif",
                                                                        "height": "1",
                                                                        "width": "1",
                                                                        "alt": " "
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "c1Background navTabBackground",
                                                                    "nowrap": "",
                                                                    "onmouseover": "this.className = 'navTabBackgroundHover '",
                                                                    "onmouseout": "this.className = 'navTabBackground c1Background'"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "a",
                                                                      "attributes": {
                                                                        "href": "/aspen/studentLockerList.do?navkey=locker.files.list",
                                                                        "class": "navTab",
                                                                        "title": "Locker tab"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "text": "Locker"
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "navTabDividerSolid"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/spacer.gif",
                                                                        "height": "1",
                                                                        "width": "1",
                                                                        "alt": " "
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "c1Background navTabBackground",
                                                                    "nowrap": "",
                                                                    "onmouseover": "this.className = 'navTabBackgroundHover '",
                                                                    "onmouseout": "this.className = 'navTabBackground c1Background'"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "a",
                                                                      "attributes": {
                                                                        "href": "/aspen/oneSearchSearchContainer.do?navkey=discovery.oneSearch.oneSearch",
                                                                        "class": "navTab",
                                                                        "title": "Destiny"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "text": "Destiny"
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "class": "navTabDividerSolid"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/spacer.gif",
                                                                        "height": "1",
                                                                        "width": "1",
                                                                        "alt": " "
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "100%",
                                                                    "class": "navTabBackground c1Background"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/spacer.gif",
                                                                        "height": "1",
                                                                        "width": "1",
                                                                        "alt": " "
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          "tag": "tbody",
                                                          "attributes": {
                                                            "style": "display: inline-block"
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "width": "1",
                                                                    "id": "right-arrow-container",
                                                                    "class": "c1Background navTabBackground",
                                                                    "nowrap": "",
                                                                    "onmouseover": "this.className = 'navTabBackgroundHover'",
                                                                    "onmouseout": "this.className = 'navTabBackground c1Background'",
                                                                    "style": "display: none"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "div",
                                                                      "attributes": {
                                                                        "class": "arrowToRight"
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "tag": "div",
                                                  "attributes": {
                                                    "id": "topMenuBarRight",
                                                    "class": "topMenuRightScroll"
                                                  },
                                                  "children": [
                                                    {
                                                      "tag": "img",
                                                      "attributes": {
                                                        "src": "images/next-arrow-white-black-border.png",
                                                        "style": "color: transparent;"
                                                      },
                                                      "children": [
                                                        
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "tag": "tr",
                      "attributes": {
                        
                      },
                      "children": [
                        {
                          "tag": "td",
                          "attributes": {
                            
                          },
                          "children": [
                            {
                              "tag": "div",
                              "attributes": {
                                "id": "contentArea",
                                "class": "contentPad"
                              },
                              "children": [
                                {
                                  "tag": "table",
                                  "attributes": {
                                    "class": "breadcrumbsOuterContainer",
                                    "width": "100%",
                                    "cellpadding": "0",
                                    "cellspacing": "0",
                                    "border": "0"
                                  },
                                  "children": [
                                    {
                                      "tag": "tbody",
                                      "attributes": {
                                        
                                      },
                                      "children": [
                                        {
                                          "tag": "tr",
                                          "attributes": {
                                            
                                          },
                                          "children": [
                                            {
                                              "tag": "td",
                                              "attributes": {
                                                "id": "breadcrumbsContainer"
                                              },
                                              "children": [
                                                {
                                                  "tag": "table",
                                                  "attributes": {
                                                    "cellpadding": "0",
                                                    "cellspacing": "0",
                                                    "border": "0"
                                                  },
                                                  "children": [
                                                    {
                                                      "tag": "tbody",
                                                      "attributes": {
                                                        
                                                      },
                                                      "children": [
                                                        {
                                                          "tag": "tr",
                                                          "attributes": {
                                                            
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "id": "bodytop",
                                                                "class": "breadcrumbs"
                                                              },
                                                              "children": [
                                                                {
                                                                  "text": "My Record"
                                                                },
                                                                {
                                                                  "tag": "img",
                                                                  "attributes": {
                                                                    "src": "images/spacer.gif",
                                                                    "height": "1",
                                                                    "width": "2",
                                                                    "alt": " "
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "img",
                                                                  "attributes": {
                                                                    "src": "images/spacer.gif",
                                                                    "height": "1",
                                                                    "width": "2",
                                                                    "alt": " "
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                
                                                              },
                                                              "children": [
                                                                
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                
                                                              },
                                                              "children": [
                                                                
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "img",
                                                                  "attributes": {
                                                                    "src": "images/spacer.gif",
                                                                    "height": "27",
                                                                    "width": "1",
                                                                    "alt": " "
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "tag": "td",
                                              "attributes": {
                                                "align": "right"
                                              },
                                              "children": [
                                                {
                                                  "tag": "script",
                                                  "attributes": {
                                                    "language": "Javascript"
                                                  },
                                                  "children": [
                                                    {
                                                        "text": "function expandSearchString()\n{\nif (document.getElementById(\"searchStringDiv\").style.visibility == \"hidden\")\n{\ndocument.getElementById(\"searchStringDiv\").style.visibility = \"visible\";\ndocument.getElementById(\"searchStringNameID\").focus();\n}\nelse\n{\ndocument.getElementById(\"searchStringDiv\").style.visibility = \"hidden\";\n}\n}\nfunction redirectWithSearch(studentOID)\n{\nvar nameOrId = document.getElementById(\"searchStringNameID\").value;\nvar last = document.getElementById(\"searchStringLast\").value;\nif ((nameOrId == null || nameOrId == '') &amp;&amp; (last == null || last == ''))\n{\nvar elem = document.getElementById(\"searchErrorMessage\");\nvar changeVal = grabResource(\"studentSearch.missingFields\");\n//Cross browser fix\n//innerText - chrome\n//textContent - firefox\n//error on innerText -&gt; setting the sibling -&gt; IE\ntry\n{\nelem.innerText = changeVal;\nelem.textContent = changeVal;\n}\ncatch(err)\n{\nelem.nextSibling.data = changeVal;\n}\n}\nelse\n{\nvar first = document.getElementById(\"searchStringFirst\").value;\nvar gradeLevel = document.getElementById(\"searchStringGradeLevel\").value;\nvar gender = document.getElementById(\"searchStringGender\").value;\nvar dob = document.getElementById(\"searchStringDOB\").value;\nvar pathname = document.location[\"pathname\"];\nvar navKey = document.location[\"search\"];\nvar deploymentId = \"ma-cambridge\";\nnavKey = removeParam(navKey, 'nameID');\nnavKey = removeParam(navKey, 'last');\nnavKey = removeParam(navKey, 'first');\nnavKey = removeParam(navKey, 'gradeLevel');\nnavKey = removeParam(navKey, 'gender');\nnavKey = removeParam(navKey, 'dob');\nnavKey = removeParam(navKey, 'studentOID');\n//If there is no navKey, we need a ? to say we have params. If there is one, we need to add an identifier for the end of it\nif (navKey.indexOf('?') &lt; 0)\n{\nnavKey = '?';\n}\nelse\n{\nnavKey = navKey + '&amp;';\n}\nvar resouce = rewriteUrl('searchString.do?navkey=' + navKey +\n'&amp;nameID=' + nameOrId +\n'&amp;last=' + last +\n'&amp;first=' + first +\n'&amp;gradeLevel=' + gradeLevel +\n'&amp;gender=' + gender +\n'&amp;dob=' + dob +\n'&amp;studentOID=' + studentOID +\n'&amp;deploymentId=' + deploymentId);\n$.ajax({\ntype: \"GET\",\nurl: resouce,\nasync: false,\nsuccess: function()\n{\ndoSubmit(0, document.forms[0]);\n},\nerror: function(){$(\"#sra-status\").text(\"Communication failure\");},\ncache: false\n});\n}\n}\nfunction removeParam(navKey, param)\n{\nvar paramLocation = navKey.indexOf(param);\nif (paramLocation &gt; -1)\n{\nvar amperLocation = navKey.indexOf('&amp;', paramLocation);\nif (amperLocation &gt; -1)\n{\nreturn navKey.substring(0, paramLocation) +\tnavKey.substring(amperLocation + 1, navKey.length)\n}\nelse\n{\n//There is the last param in the list, so we need to remove the previous &amp;\nreturn navKey.substring(0, paramLocation - 1);\n}\n}\nreturn navKey;\n}"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "tag": "style",
                                                  "attributes": {
                                                    "type": "text/css"
                                                  },
                                                  "children": [
                                                    {
                                                      "text": "span.button-text {\npadding-right: 0 !important;\n}"
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "tag": "tr",
                                          "attributes": {
                                            
                                          },
                                          "children": [
                                            {
                                              "tag": "td",
                                              "attributes": {
                                                "colspan": "2"
                                              },
                                              "children": [
                                                {
                                                  "tag": "img",
                                                  "attributes": {
                                                    "src": "images/spacer.gif",
                                                    "height": "5",
                                                    "width": "1",
                                                    "alt": " "
                                                  },
                                                  "children": [
                                                    
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "tag": "table",
                                  "attributes": {
                                    "width": "100%",
                                    "cellpadding": "0",
                                    "cellspacing": "0",
                                    "border": "0"
                                  },
                                  "children": [
                                    {
                                      "tag": "tbody",
                                      "attributes": {
                                        
                                      },
                                      "children": [
                                        {
                                          "tag": "tr",
                                          "attributes": {
                                            "valign": "top"
                                          },
                                          "children": [
                                            {
                                              "tag": "td",
                                              "attributes": {
                                                "height": "1",
                                                "width": "100",
                                                "id": "layoutVerticalTabsContainer",
                                                "style": "min-width: 100px"
                                              },
                                              "children": [
                                                {
                                                  "tag": "div",
                                                  "attributes": {
                                                    "id": "layoutVerticalTabs",
                                                    "style": ""
                                                  },
                                                  "children": [
                                                    {
                                                      "tag": "script",
                                                      "attributes": {
                                                        "language": "Javascript"
                                                      },
                                                      "children": [
                                                        {
                                                          "text": "function openNode(url)\n{\nvar lastSelection = getLastSelectedValue(\"genericDetailForm\");\nif (lastSelection != \"\")\n{\nurl += \"&amp;oid=\" + lastSelection;\n}\nurl = rewriteUrl(url);\nwindow.name = \"parentWindow\";\nwindow.open(url, window.name);\n}"
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      "tag": "table",
                                                      "attributes": {
                                                        "width": "100%",
                                                        "cellpadding": "0",
                                                        "cellspacing": "0",
                                                        "border": "0",
                                                        "height": "100%"
                                                      },
                                                      "children": [
                                                        {
                                                          "tag": "tbody",
                                                          "attributes": {
                                                            
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                "height": "1"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "class": "verticalTabSelected verticalTabShadowDown  verticalTabTopBorder"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "div",
                                                                      "attributes": {
                                                                        "class": "verticalTabLabel verticalTabBar c2Border"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "a",
                                                                          "attributes": {
                                                                            "href": "portalStudentDetail.do?navkey=myInfo.details.detail",
                                                                            "title": "My Details",
                                                                            "class": "verticalTabTextSelected verticalTabLink"
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "text": "My Details"
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                "height": "1"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "class": "verticalTab pointer   ",
                                                                    "onmouseover": "this.className = 'verticalTabHighlight verticalTab pointer  '",
                                                                    "onmouseout": "this.className = 'verticalTab pointer '"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "div",
                                                                      "attributes": {
                                                                        "class": "verticalTabLabel"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "a",
                                                                          "attributes": {
                                                                            "href": "transcriptList.do?navkey=myInfo.trn.list",
                                                                            "title": "Transcript information including credit and grade point summaries",
                                                                            "class": "verticalTabText"
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "text": "Transcript"
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                "height": "1"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "class": "verticalTab pointer   ",
                                                                    "onmouseover": "this.className = 'verticalTabHighlight verticalTab pointer  '",
                                                                    "onmouseout": "this.className = 'verticalTab pointer '"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "div",
                                                                      "attributes": {
                                                                        "class": "verticalTabLabel"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "a",
                                                                          "attributes": {
                                                                            "href": "studentScheduleContextList.do?navkey=myInfo.sch.list",
                                                                            "title": "Current schedule",
                                                                            "class": "verticalTabText"
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "text": "Current Schedule"
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                "height": "1"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "class": "verticalTab pointer   ",
                                                                    "onmouseover": "this.className = 'verticalTabHighlight verticalTab pointer  '",
                                                                    "onmouseout": "this.className = 'verticalTab pointer '"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "div",
                                                                      "attributes": {
                                                                        "class": "verticalTabLabel"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "a",
                                                                          "attributes": {
                                                                            "href": "studentAttendanceList.do?navkey=myInfo.att.list",
                                                                            "title": "Attendance",
                                                                            "class": "verticalTabText"
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "text": "Attendance"
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                "height": "1"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "class": "verticalTab pointer   ",
                                                                    "onmouseover": "this.className = 'verticalTabHighlight verticalTab pointer  '",
                                                                    "onmouseout": "this.className = 'verticalTab pointer '"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "div",
                                                                      "attributes": {
                                                                        "class": "verticalTabLabel"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "a",
                                                                          "attributes": {
                                                                            "href": "conductList.do?navkey=myInfo.cnd.list",
                                                                            "title": "Conduct information including incidents and actions",
                                                                            "class": "verticalTabText"
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "text": "Conduct"
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                "height": "1"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "class": "verticalTab pointer   ",
                                                                    "onmouseover": "this.className = 'verticalTabHighlight verticalTab pointer  '",
                                                                    "onmouseout": "this.className = 'verticalTab pointer '"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "div",
                                                                      "attributes": {
                                                                        "class": "verticalTabLabel"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "a",
                                                                          "attributes": {
                                                                            "href": "subscriptionEntry.do?navkey=myInfo.sub.sub",
                                                                            "title": "Notifications",
                                                                            "class": "verticalTabText"
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "text": "Notifications"
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                "height": "1"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "class": "verticalTab pointer   ",
                                                                    "onmouseover": "this.className = 'verticalTabHighlight verticalTab pointer  '",
                                                                    "onmouseout": "this.className = 'verticalTab pointer '"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "div",
                                                                      "attributes": {
                                                                        "class": "verticalTabLabel"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "a",
                                                                          "attributes": {
                                                                            "href": "studentRequestList.do?navkey=myInfo.req.req",
                                                                            "title": "Request info including current schedule and graduation progress",
                                                                            "class": "verticalTabText"
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "text": "Requests"
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "tr",
                                                              "attributes": {
                                                                "height": "*"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "td",
                                                                  "attributes": {
                                                                    "id": "fillerRow",
                                                                    "width": "1",
                                                                    "class": "borderRight"
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "tag": "td",
                                              "attributes": {
                                                "rowspan": "2",
                                                "width": "*",
                                                "class": "contentContainer"
                                              },
                                              "children": [
                                                {
                                                  "tag": "table",
                                                  "attributes": {
                                                    "border": "0",
                                                    "cellspacing": "0",
                                                    "cellpadding": "0",
                                                    "class": "optionsBar"
                                                  },
                                                  "children": [
                                                    {
                                                      "tag": "tbody",
                                                      "attributes": {
                                                        
                                                      },
                                                      "children": [
                                                        {
                                                          "tag": "tr",
                                                          "attributes": {
                                                            "class": "",
                                                            "height": "22"
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "width": "1%",
                                                                "style": "display: none;"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "div",
                                                                  "attributes": {
                                                                    "id": "maximizeMenuButton",
                                                                    "class": "menu pointer menuBarSegment c1Background",
                                                                    "onclick": "showMaximizeMenus(event)"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/menu-icon-white.png",
                                                                        "style": "height: 15px"
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "width": "1%"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "div",
                                                                  "attributes": {
                                                                    "id": "options",
                                                                    "tabindex": "0",
                                                                    "class": "menu pointer menuBarSegment c1Background"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "text": "Options"
                                                                    },
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/white_down_arrow.png",
                                                                        "class": "whiteDownArrow"
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "div",
                                                                  "attributes": {
                                                                    "id": "optionsPane",
                                                                    "class": "menuPane c2Border-left"
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "script",
                                                                  "attributes": {
                                                                    "language": "Javascript"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "text": "var options = new Menu('options', null, 'menuItemHighlight pointer', 'menuPlainBackground pointer',false);\noptions.disable();"
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "width": "1%"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "div",
                                                                  "attributes": {
                                                                    "id": "reportsMenu",
                                                                    "tabindex": "0",
                                                                    "class": "menu pointer menuBarSegment c1Background"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "text": "Reports"
                                                                    },
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/white_down_arrow.png",
                                                                        "class": "whiteDownArrow"
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "div",
                                                                  "attributes": {
                                                                    "id": "reportsMenuPane",
                                                                    "class": "menuPane c2Border-left"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "table",
                                                                      "attributes": {
                                                                        "width": "105",
                                                                        "id": "reportsMenuColumn0Table",
                                                                        "border": "0",
                                                                        "cellspacing": "0",
                                                                        "cellpadding": "0",
                                                                        "class": "menuColumn"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "tbody",
                                                                          "attributes": {
                                                                            
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "tag": "tr",
                                                                              "attributes": {
                                                                                "data-name": "menu.tools.reports.option.queue",
                                                                                "id": "reportsMenu_Option0",
                                                                                "data-id": "null",
                                                                                "tabindex": "0"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1",
                                                                                    "align": "left"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "img",
                                                                                      "attributes": {
                                                                                        "src": "images/spacer.gif",
                                                                                        "width": "4"
                                                                                      },
                                                                                      "children": [
                                                                                        
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "*",
                                                                                    "align": "left"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "My Job Queue..."
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1",
                                                                                    "align": "right"
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "script",
                                                                  "attributes": {
                                                                    "language": "Javascript"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "text": "var reportsMenu = new Menu('reportsMenu', null, 'menuItemHighlight pointer', 'menuPlainBackground pointer',false);\nreportsMenu.addOption('reportsMenu_Option0', 'doNamedPopup(\\'personalToolQueue.do\\', 450, 350, \\'reportQueue\\', \\'\\');');"
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "width": "1%"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "div",
                                                                  "attributes": {
                                                                    "id": "helpMenu",
                                                                    "class": "menu pointer menuBarSegment c1Background",
                                                                    "tabindex": "0"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "text": "Help"
                                                                    },
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/white_down_arrow.png",
                                                                        "class": "whiteDownArrow"
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "div",
                                                                  "attributes": {
                                                                    "id": "helpMenuPane",
                                                                    "class": "menuPane c2border-left"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "table",
                                                                      "attributes": {
                                                                        "border": "0",
                                                                        "cellspacing": "0",
                                                                        "cellpadding": "0"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "tbody",
                                                                          "attributes": {
                                                                            
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "tag": "tr",
                                                                              "attributes": {
                                                                                "id": "helpOnline",
                                                                                "tabindex": "0"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "img",
                                                                                      "attributes": {
                                                                                        "src": "images/spacer.gif",
                                                                                        "height": "1",
                                                                                        "width": "4",
                                                                                        "alt": " "
                                                                                      },
                                                                                      "children": [
                                                                                        
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "*"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "Help for this Page"
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1",
                                                                                    "align": "right"
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              "tag": "tr",
                                                                              "attributes": {
                                                                                "id": "helpCenter",
                                                                                "tabindex": "0"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "img",
                                                                                      "attributes": {
                                                                                        "src": "images/spacer.gif",
                                                                                        "height": "1",
                                                                                        "width": "4",
                                                                                        "alt": " "
                                                                                      },
                                                                                      "children": [
                                                                                        
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "*"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "Help Center"
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1",
                                                                                    "align": "right"
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              "tag": "tr",
                                                                              "attributes": {
                                                                                "id": "helpReleaseNotes",
                                                                                "tabindex": "0"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "img",
                                                                                      "attributes": {
                                                                                        "src": "images/spacer.gif",
                                                                                        "height": "1",
                                                                                        "width": "4",
                                                                                        "alt": " "
                                                                                      },
                                                                                      "children": [
                                                                                        
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "*"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "Release Notes"
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1",
                                                                                    "align": "right"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "img",
                                                                                      "attributes": {
                                                                                        "src": "images/sub-menu-arrow.gif"
                                                                                      },
                                                                                      "children": [
                                                                                        
                                                                                      ]
                                                                                    },
                                                                                    {
                                                                                      "tag": "div",
                                                                                      "attributes": {
                                                                                        "id": "helpReleaseNotesPane",
                                                                                        "class": "menuPane c2border-left"
                                                                                      },
                                                                                      "children": [
                                                                                        {
                                                                                          "tag": "table",
                                                                                          "attributes": {
                                                                                            "border": "0",
                                                                                            "cellspacing": "0",
                                                                                            "cellpadding": "0"
                                                                                          },
                                                                                          "children": [
                                                                                            {
                                                                                              "tag": "tbody",
                                                                                              "attributes": {
                                                                                                
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "tr",
                                                                                                  "attributes": {
                                                                                                    "id": "helpReleaseNotes1",
                                                                                                    "tabindex": "0"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "td",
                                                                                                      "attributes": {
                                                                                                        "nowrap": "",
                                                                                                        "class": "menuOption",
                                                                                                        "width": "1"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "img",
                                                                                                          "attributes": {
                                                                                                            "src": "images/spacer.gif",
                                                                                                            "height": "1",
                                                                                                            "width": "4",
                                                                                                            "alt": " "
                                                                                                          },
                                                                                                          "children": [
                                                                                                            
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      "tag": "td",
                                                                                                      "attributes": {
                                                                                                        "nowrap": "",
                                                                                                        "class": "menuOption",
                                                                                                        "width": "*",
                                                                                                        "align": "left"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Aspen Release Notes"
                                                                                                        }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      "tag": "td",
                                                                                                      "attributes": {
                                                                                                        "nowrap": "",
                                                                                                        "class": "menuOption",
                                                                                                        "width": "1",
                                                                                                        "align": "right"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "tr",
                                                                                                  "attributes": {
                                                                                                    "id": "helpReleaseNotes2",
                                                                                                    "tabindex": "0"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "td",
                                                                                                      "attributes": {
                                                                                                        "nowrap": "",
                                                                                                        "class": "menuOption",
                                                                                                        "width": "1"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "img",
                                                                                                          "attributes": {
                                                                                                            "src": "images/spacer.gif",
                                                                                                            "height": "1",
                                                                                                            "width": "4",
                                                                                                            "alt": " "
                                                                                                          },
                                                                                                          "children": [
                                                                                                            
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      "tag": "td",
                                                                                                      "attributes": {
                                                                                                        "nowrap": "",
                                                                                                        "class": "menuOption",
                                                                                                        "width": "*",
                                                                                                        "align": "left"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Release Highlight Videos"
                                                                                                        }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      "tag": "td",
                                                                                                      "attributes": {
                                                                                                        "nowrap": "",
                                                                                                        "class": "menuOption",
                                                                                                        "width": "1",
                                                                                                        "align": "right"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              "tag": "tr",
                                                                              "attributes": {
                                                                                "id": "helpUserGuides",
                                                                                "tabindex": "0"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "img",
                                                                                      "attributes": {
                                                                                        "src": "images/spacer.gif",
                                                                                        "height": "1",
                                                                                        "width": "4",
                                                                                        "alt": " "
                                                                                      },
                                                                                      "children": [
                                                                                        
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "*"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "User Guides"
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1",
                                                                                    "align": "right"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "img",
                                                                                      "attributes": {
                                                                                        "src": "images/sub-menu-arrow.gif"
                                                                                      },
                                                                                      "children": [
                                                                                        
                                                                                      ]
                                                                                    },
                                                                                    {
                                                                                      "tag": "div",
                                                                                      "attributes": {
                                                                                        "id": "helpUserGuidesPane",
                                                                                        "class": "menuPane c2border-left"
                                                                                      },
                                                                                      "children": [
                                                                                        {
                                                                                          "tag": "table",
                                                                                          "attributes": {
                                                                                            "border": "0",
                                                                                            "cellspacing": "0",
                                                                                            "cellpadding": "0"
                                                                                          },
                                                                                          "children": [
                                                                                            {
                                                                                              "tag": "tbody",
                                                                                              "attributes": {
                                                                                                
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "tr",
                                                                                                  "attributes": {
                                                                                                    "id": "helpUserGuides0",
                                                                                                    "tabindex": "0"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "td",
                                                                                                      "attributes": {
                                                                                                        "nowrap": "",
                                                                                                        "class": "menuOption",
                                                                                                        "width": "1"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "img",
                                                                                                          "attributes": {
                                                                                                            "src": "images/spacer.gif",
                                                                                                            "height": "1",
                                                                                                            "width": "4",
                                                                                                            "alt": " "
                                                                                                          },
                                                                                                          "children": [
                                                                                                            
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      "tag": "td",
                                                                                                      "attributes": {
                                                                                                        "nowrap": "",
                                                                                                        "class": "menuOption",
                                                                                                        "width": "*",
                                                                                                        "align": "left"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Family and Student Portals - User Guide"
                                                                                                        }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      "tag": "td",
                                                                                                      "attributes": {
                                                                                                        "nowrap": "",
                                                                                                        "class": "menuOption",
                                                                                                        "width": "1",
                                                                                                        "align": "right"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              "tag": "tr",
                                                                              "attributes": {
                                                                                "class": "menuPlainBackground pointer"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuSeparator",
                                                                                    "colspan": "3"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "img",
                                                                                      "attributes": {
                                                                                        "src": "images/spacer.gif",
                                                                                        "height": "1",
                                                                                        "width": "1",
                                                                                        "alt": " "
                                                                                      },
                                                                                      "children": [
                                                                                        
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              "tag": "tr",
                                                                              "attributes": {
                                                                                "id": "helpAbout",
                                                                                "tabindex": "0"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "img",
                                                                                      "attributes": {
                                                                                        "src": "images/spacer.gif",
                                                                                        "height": "1",
                                                                                        "width": "4",
                                                                                        "alt": " "
                                                                                      },
                                                                                      "children": [
                                                                                        
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "*"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "About Aspen"
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "nowrap": "",
                                                                                    "class": "menuOption",
                                                                                    "width": "1",
                                                                                    "align": "right"
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "script",
                                                                  "attributes": {
                                                                    "language": "Javascript"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "text": "var helpMenu = new Menu('helpMenu', null, 'menuItemHighlight pointer', 'menuPlainBackground pointer');\nvar helpUrl    = \"#Family_and_Student_Portals/Student_Portal_My_Details.htm\";\nvar helpUrlEsc = \"null\";\nhelpUrl = (helpUrl != \"null\") ? helpUrl : (helpUrlEsc != \"null\") ? helpUrlEsc : \"\";\nif (true &amp;&amp; (!isSafari() || false))\n{\nvar helpFullUrl = \"http://aspenhelp.follettlearning.com?sessid=NjkwLENMLDIwMjUtMDMtMjQsRU5fVVM=&amp;path=help/aspen_CSH.htm&amp;anchor=\"+helpUrl.replace(\"#\", \"\");\nvar helpCenterUrl = \"http://aspenhelp.follettlearning.com?sessid=NjkwLENMLDIwMjUtMDMtMjQsRU5fVVM=&amp;path=\" + \"help/Content/Help_Center/Aspen_Main.htm\";\n}\nelse\n{\nvar helpFullUrl = \"help/aspen_CSH.htm\" + helpUrl;\nvar helpCenterUrl = \"help/Content/Help_Center/Aspen_Main.htm\";\n}\nhelpFullUrl = rewriteUrl(helpFullUrl);\nhelpMenu.addOption('helpOnline', 'window.open(\"'+helpFullUrl+'\", \"_blank\");');\nhelpCenterUrl = rewriteUrl(helpCenterUrl);\nhelpMenu.addOption('helpCenter', 'window.open(\"'+helpCenterUrl+'\", \"_blank\");');\nif(false)\n{\nhelpMenu.addOption('helpReportProblem', 'doNamedPopup(\"ticketSubmit.do\", 700, 400, \"ticketSubmitWindow\", \"\");');\n}\nhelpMenu.addOption('helpReleaseNotes', 'doNamedPopup(\"about.do\", 400, 170, \"aboutWindow\", \"\");');\nhelpMenu.addOption('helpUserGuides', 'doNamedPopup(\"about.do\", 400, 170, \"aboutWindow\", \"\");');\nhelpMenu.addOption('helpAbout', 'doNamedPopup(\"about.do\", 400, 200, \"aboutWindow\", \"\");');\nvar helpReleaseNotesMenu = new Menu('helpReleaseNotes', helpMenu, 'menuItemHighlight pointer', 'menuPlainBackground pointer');\n\nhelpReleaseNotesMenu.addOption('helpReleaseNotes1', 'window.open(rewriteUrl(\"http://aspenhelp.follettlearning.com?sessid=NjkwLENMLDIwMjUtMDMtMjQsRU5fVVM=&amp;path=latestReleaseNotes/ReleaseNotes.pdf\"), \"_blank\");');\n\nhelpReleaseNotesMenu.addOption('helpReleaseNotes2', 'window.open(rewriteUrl(\"https://www.follettcommunity.com/s/topic/0TO2J000000k9bwWAA/current-release\"), \"_blank\");');\n\nvar helpUserGuidesMenu = new Menu('helpUserGuides', helpMenu, 'menuItemHighlight pointer', 'menuPlainBackground pointer');\n\nhelpUserGuidesMenu.addOption('helpUserGuides0', 'window.open(rewriteUrl(\"http://aspenhelp.follettlearning.com?sessid=NjkwLENMLDIwMjUtMDMtMjQsRU5fVVM=&amp;path=guides/Family_Student_portal.pdf\"), \"_blank\");');"
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "width": "*",
                                                                "align": "right"
                                                              },
                                                              "children": [
                                                                
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "width": "1",
                                                                "onmouseout": "this.className = '';",
                                                                "onmouseover": "this.className = this.className = 'controlHoverBackground';",
                                                                "class": ""
                                                              },
                                                              "children": [
                                                                
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "width": "1"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "img",
                                                                  "attributes": {
                                                                    "src": "images/spacer.gif",
                                                                    "height": "1",
                                                                    "width": "7",
                                                                    "alt": " "
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "width": "1"
                                                              },
                                                              "children": [
                                                                
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "width": "1",
                                                                "onmouseover": "this.className = this.className = 'controlHoverBackground';",
                                                                "onmouseout": "this.className = '';",
                                                                "style": "padding-right: 3px"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "a",
                                                                  "attributes": {
                                                                    "href": "javascript:toggleMaximize('Maximize', 'Minimize')"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "id": "maximizeImg",
                                                                        "src": "images/max-window.gif",
                                                                        "border": "0"
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "tag": "script",
                                                  "attributes": {
                                                    "language": "JavaScript"
                                                  },
                                                  "children": [
                                                    {
                                                      "text": "$(document).ready(function(){\nvar firstRowLink = $('tr.listCell').eq(0).find('a');\n$('body').prepend(\n'&lt;div class=\"skipnav-wrapper\"&gt;'+\n'&lt;a href=\"#content_skip_link_anchor\" tabindex=\"1\" class=\"skipnav\"&gt;'+\n'Skip to main content'+\n'&lt;/a&gt;'+\n'&lt;/div&gt;'\n);\n$('a.templateTabTextSelected').attr('id', 'content_skip_link_anchor');\n});"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "tag": "input",
                                                  "attributes": {
                                                    "type": "hidden",
                                                    "name": "originalOid",
                                                    "value": "STD000000AeemF"
                                                  },
                                                  "children": [
                                                    
                                                  ]
                                                },
                                                {
                                                  "tag": "script",
                                                  "attributes": {
                                                    "src": "js/xmlElement.js?version=6.9.0.6.94",
                                                    "type": "text/javascript"
                                                  },
                                                  "children": [
                                                    
                                                  ]
                                                },
                                                {
                                                  "tag": "script",
                                                  "attributes": {
                                                    "src": "js/detailAutoSave.js?version=6.9.0.6.94",
                                                    "type": "text/javascript"
                                                  },
                                                  "children": [
                                                    
                                                  ]
                                                },
                                                {
                                                  "tag": "script",
                                                  "attributes": {
                                                    "language": "JavaScript"
                                                  },
                                                  "children": [
                                                    {
                                                      "text": "$(function()\n{\n\n});\nfunction deleteBean()\n{\nvar customDeleteFunction = \"null\";\nif (customDeleteFunction != null &amp;&amp; customDeleteFunction != \"null\" &amp;&amp; customDeleteFunction != \"\") {\neval(customDeleteFunction)\n} else {\nvar action = \"deleteWarning.do\" +\n'?dataClass=com.x2dev.sis.model.beans.SisStudent';\nvar oid = 'STD000000AeemF';\nstartProgressMeter();\nmakeSynchronousXmlRequest(action, \"deleteSuccess\", \"deleteError()\", \"oids\", oid);\n}\n}\nfunction deleteBeanEvent()\n{\nvar action = \"deleteWarningPlanner.do\" +\n'?dataClass=com.x2dev.sis.model.beans.SisStudent';\nvar oid = 'STD000000AeemF';\nstartProgressMeter();\nmakeSynchronousXmlRequest(action, \"deleteSuccess\", \"deleteError()\", \"oids\", oid);\n}\nfunction deleteError()\n{\nstopProgressMeter();\nvar label = '&lt;strong&gt;ERROR:&lt;/strong&gt; &amp;nbsp; Communication error. Try again in a few minutes. If the problem persists, contact your system administrator. ';\nshowAlertWindow(label, false, 400, 'button.ok', '');\n}\nfunction deleteSuccess(resultXml)\n{\nstopProgressMeter();\nvar root = resultXml.getElementsByTagName(\"response\")[0];\nvar message = root.getAttribute(\"message\");\nif (message != null &amp;&amp; message.length &gt; 0)\n{\nvar aClassName = 'SisStudent';\nvar label = '&lt;strong&gt;WARNING:&lt;/strong&gt; &amp;nbsp; Deleting this ' + aClassName + ' record will also delete the following related records:&lt;br&gt;&lt;br&gt;' + message + ' ';\nshowAlertWindow(label, false, 325, 'button.continue', \"doSubmit('\" + 130 + \"', document.forms['genericDetailForm']);\", 'button.cancel', '');\n}\nelse\n{\nvar message = 'Delete this student?';\nshowAlertWindow(message, false, 400, 'button.continue', \"doSubmit(\" + 130 + \", document.forms['genericDetailForm']);\", 'button.cancel', '');\n}\n}"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "tag": "table",
                                                  "attributes": {
                                                    "width": "100%",
                                                    "cellpadding": "0",
                                                    "cellspacing": "0",
                                                    "border": "0"
                                                  },
                                                  "children": [
                                                    {
                                                      "tag": "tbody",
                                                      "attributes": {
                                                        
                                                      },
                                                      "children": [
                                                        {
                                                          "tag": "tr",
                                                          "attributes": {
                                                            
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "table",
                                                                  "attributes": {
                                                                    "id": "topButtonBar",
                                                                    "border": "0",
                                                                    "cellpadding": "0",
                                                                    "cellspacing": "0"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "tbody",
                                                                      "attributes": {
                                                                        
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "tr",
                                                                          "attributes": {
                                                                            
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "tag": "td",
                                                                              "attributes": {
                                                                                
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "script",
                                                                                  "attributes": {
                                                                                    "src": "js/tableLock.js?version=6.9.0.6.94",
                                                                                    "type": "text/javascript"
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "input",
                                                                                  "attributes": {
                                                                                    "type": "hidden",
                                                                                    "name": "independentSave",
                                                                                    "value": "null"
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "input",
                                                                                  "attributes": {
                                                                                    "type": "hidden",
                                                                                    "name": "savePrivileges",
                                                                                    "value": "null"
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "script",
                                                                                  "attributes": {
                                                                                    "type": "text/javascript"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "if (typeof window.cancelPressed === 'undefined') {\nwindow.cancelPressed = false;\n}\nfunction triggerCustomEvent() {\nconst iframe = document.getElementById('olrIframe');\nif (iframe &amp;&amp; iframe.contentWindow) {\niframe.contentWindow.postMessage('triggerSaveAndClose', '*');\n}\ndoSubmit(940 , this.form);\nwindow.parent.doRefresh();\nconst saveButton = document.getElementById('saveCloseButton');\nsaveButton.parentNode.removeChild(saveButton);\nconst cancelButton = document.getElementById('cancelButton');\nconst buttonText = cancelButton.querySelector('.button-text');\nif (buttonText) {\nbuttonText.textContent = 'Close';\n}\nwindow.parent.doRefresh();\n}\nfunction doCustomCancel(form)\n{\nconst iframe = document.getElementById('olrIframe');\nif (window.cancelPressed) {\ndoSubmit(940 , this.form);\nwindow.cancelPressed = false;\n(new EmbeddedPopup()).close();\n} else {\ndoSubmit(940, form);\nconst saveButton = document.getElementById('saveCloseButton');\nconst cancelButton = document.getElementById('cancelButton');\nif (saveButton) saveButton.disabled = false;\nif (cancelButton) cancelButton.disabled = false;\nwindow.cancelPressed = true;\n}\nif (iframe &amp;&amp; iframe.contentWindow) {\niframe.contentWindow.postMessage('triggerClose', '*');\n}\n}"
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "table",
                                                                                  "attributes": {
                                                                                    "border": "0",
                                                                                    "cellspacing": "0",
                                                                                    "cellpadding": "0"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "tbody",
                                                                                      "attributes": {
                                                                                        
                                                                                      },
                                                                                      "children": [
                                                                                        {
                                                                                          "tag": "tr",
                                                                                          "attributes": {
                                                                                            
                                                                                          },
                                                                                          "children": [
                                                                                            {
                                                                                              "tag": "td",
                                                                                              "attributes": {
                                                                                                
                                                                                              },
                                                                                              "children": [
                                                                                                
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "td",
                                                                                              "attributes": {
                                                                                                
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "button",
                                                                                                  "attributes": {
                                                                                                    "type": "button",
                                                                                                    "class": "button",
                                                                                                    "id": "cancelButton",
                                                                                                    "tabindex": "0",
                                                                                                    "name": "cancelButton",
                                                                                                    "onclick": "doSubmit(940, this.form);return false;"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": "fa fa-close fa-lg"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": "button-text"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Cancel"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "td",
                                                                                              "attributes": {
                                                                                                "class": "extraButtons"
                                                                                              },
                                                                                              "children": [
                                                                                                
                                                                                              ]
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              "tag": "td",
                                                                              "attributes": {
                                                                                "id": "messageAreaTop"
                                                                              },
                                                                              "children": [
                                                                                
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "align": "right"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "label",
                                                                  "attributes": {
                                                                    "for": "currentTemplateIndex",
                                                                    "class": "screenReaderHiddenLabel"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "text": "Current Template Index"
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "select",
                                                                  "attributes": {
                                                                    "name": "currentTemplateIndex",
                                                                    "onchange": "doSubmit(2360, this.form);return false;",
                                                                    "id": "currentTemplateIndex",
                                                                    "class": "listHeaderDropdown",
                                                                    "title": "Template list"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "option",
                                                                      "attributes": {
                                                                        "value": "0",
                                                                        "selected": ""
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "text": "Default Template"
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          "tag": "tr",
                                                          "attributes": {
                                                            
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "colspan": "2"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "img",
                                                                  "attributes": {
                                                                    "src": "images/spacer.gif",
                                                                    "height": "10",
                                                                    "width": "1",
                                                                    "alt": " "
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          "tag": "tr",
                                                          "attributes": {
                                                            
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "colspan": "2"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "script",
                                                                  "attributes": {
                                                                    "language": "JavaScript"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "text": "INVALID_DATE_FORMAT   = 'The date you entered is not formatted properly.';\nINVALID_DATE_VALUE    = 'The date you entered is invalid.';\nINVALID_NUMERIC_VALUE = 'The number you entered is invalid.';\nINVALID_TIME_FORMAT   = 'The time you entered is not formatted properly.';\nINVALID_TIME_VALUE    = 'The time you entered is invalid.';\nINVALID_TIMESTAMP_FORMAT   = 'The date and time you entered is not formatted properly.';"
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "input",
                                                                  "attributes": {
                                                                    "type": "hidden",
                                                                    "name": "deleteDetailSetId",
                                                                    "value": ""
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "input",
                                                                  "attributes": {
                                                                    "type": "hidden",
                                                                    "name": "selectedChild",
                                                                    "value": ""
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "input",
                                                                  "attributes": {
                                                                    "type": "hidden",
                                                                    "name": "currentDetailSetId",
                                                                    "value": ""
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "input",
                                                                  "attributes": {
                                                                    "type": "hidden",
                                                                    "name": "currentChildId",
                                                                    "value": ""
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "input",
                                                                  "attributes": {
                                                                    "type": "hidden",
                                                                    "name": "newDetailSetId",
                                                                    "value": ""
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "input",
                                                                  "attributes": {
                                                                    "type": "hidden",
                                                                    "name": "newChildId",
                                                                    "value": ""
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "script",
                                                                  "attributes": {
                                                                    "src": "js/template.js?version=6.9.0.6.94",
                                                                    "type": "text/javascript"
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "script",
                                                                  "attributes": {
                                                                    "language": "Javascript",
                                                                    "type": "text/javascript"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "text": "function changeTemplateTab(index)\n{\n$('document').trigger('click');\n$('document').off('click');\ndoParamSubmit(2030, document.forms['genericDetailForm'], index);\n}"
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "table",
                                                                  "attributes": {
                                                                    "width": "100%",
                                                                    "cellpadding": "0",
                                                                    "cellspacing": "0",
                                                                    "border": "0",
                                                                    "style": "border-collapse: collapse;"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "tbody",
                                                                      "attributes": {
                                                                        
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "tr",
                                                                          "attributes": {
                                                                            
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "tag": "td",
                                                                              "attributes": {
                                                                                "class": "templateTabSelected c2Border-top",
                                                                                "width": "75"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "a",
                                                                                  "attributes": {
                                                                                    "class": "c3Color templateTabTextSelected",
                                                                                    "href": "javascript:changeTemplateTab('0');"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "Demographics"
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              "tag": "td",
                                                                              "attributes": {
                                                                                "class": "templateTabNotSelected unselectedGradient",
                                                                                "width": "75"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "a",
                                                                                  "attributes": {
                                                                                    "class": "c3Color templateTabText",
                                                                                    "href": "javascript:changeTemplateTab('1');"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "Addresses"
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              "tag": "td",
                                                                              "attributes": {
                                                                                "class": "templateTabNotSelected unselectedGradient",
                                                                                "width": "75"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "a",
                                                                                  "attributes": {
                                                                                    "class": "c3Color templateTabText",
                                                                                    "href": "javascript:changeTemplateTab('2');"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "Photo"
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              "tag": "td",
                                                                              "attributes": {
                                                                                "class": "templateTabNoHover",
                                                                                "width": "*"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "img",
                                                                                  "attributes": {
                                                                                    "src": "images/spacer.gif",
                                                                                    "height": "1",
                                                                                    "width": "1",
                                                                                    "alt": " "
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "div",
                                                                  "attributes": {
                                                                    
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "img",
                                                                      "attributes": {
                                                                        "src": "images/spacer.gif",
                                                                        "height": "15",
                                                                        "width": "1",
                                                                        "alt": " "
                                                                      },
                                                                      "children": [
                                                                        
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "div",
                                                                  "attributes": {
                                                                    "id": "collapsibleDiv0",
                                                                    "class": "detailContainer"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "table",
                                                                      "attributes": {
                                                                        "id": "mainTable",
                                                                        "width": "100%",
                                                                        "cellpadding": "0",
                                                                        "cellspacing": "0",
                                                                        "border": "0",
                                                                        "height": "1px"
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "tbody",
                                                                          "attributes": {
                                                                            
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "tag": "tr",
                                                                              "attributes": {
                                                                                "valign": "top"
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "width": "33%",
                                                                                    "height": "100%"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "table",
                                                                                      "attributes": {
                                                                                        "id": "Column|1924000838",
                                                                                        "width": "100%",
                                                                                        "cellpadding": "0",
                                                                                        "cellspacing": "0",
                                                                                        "border": "0",
                                                                                        "height": "100%",
                                                                                        "style": "border-collapse:collapse;"
                                                                                      },
                                                                                      "children": [
                                                                                        {
                                                                                          "tag": "tbody",
                                                                                          "attributes": {
                                                                                            
                                                                                          },
                                                                                          "children": [
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "height": "1"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailPropertyGutter headerLabelBackground"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailValueGutter"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|278151226"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "First name"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(relStdPsnOid_psnNameFirst)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "text": "Leonardo"
                                                                                                            },
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(relStdPsnOid_psnNameFirst)",
                                                                                                                "value": "Leonardo"
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|1312640806"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Middle name"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(relStdPsnOid_psnNameMiddle)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(relStdPsnOid_psnNameMiddle)",
                                                                                                                "value": ""
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|635774591"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Last name"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(relStdPsnOid_psnNameLast)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "text": "Glorioso"
                                                                                                            },
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(relStdPsnOid_psnNameLast)",
                                                                                                                "value": "Glorioso"
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|1378594476"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Suffix"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(relStdPsnOid_psnNameSuffix)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(relStdPsnOid_psnNameSuffix)",
                                                                                                                "value": ""
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailPropertyGutter headerLabelBackground"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailValueGutter"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "width": "33%",
                                                                                    "height": "100%"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "table",
                                                                                      "attributes": {
                                                                                        "id": "Column|1212631619",
                                                                                        "width": "100%",
                                                                                        "cellpadding": "0",
                                                                                        "cellspacing": "0",
                                                                                        "border": "0",
                                                                                        "height": "100%",
                                                                                        "style": "border-collapse:collapse;"
                                                                                      },
                                                                                      "children": [
                                                                                        {
                                                                                          "tag": "tbody",
                                                                                          "attributes": {
                                                                                            
                                                                                          },
                                                                                          "children": [
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "height": "1"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailPropertyGutter headerLabelBackground"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailValueGutter"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|1480369312"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "School &gt; Name"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(relStdSklOid_sklSchoolName)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "text": "Cambridge Rindge and Latin School"
                                                                                                            },
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(relStdSklOid_sklSchoolName)",
                                                                                                                "value": "Cambridge Rindge and Latin School"
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|2111166674"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Next School &gt; Name"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(relStdSklNext_sklSchoolName)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "text": "Cambridge Rindge and Latin School"
                                                                                                            },
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(relStdSklNext_sklSchoolName)",
                                                                                                                "value": "Cambridge Rindge and Latin School"
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|476498859"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Year of graduation"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(stdYog)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "text": "2027"
                                                                                                            },
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(stdYog)",
                                                                                                                "value": "2027"
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|558003491"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Grade level"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(stdGradeLevel)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "text": "10"
                                                                                                            },
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(stdGradeLevel)",
                                                                                                                "value": "10"
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|1906382013"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Guidance Counselor"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(stdFieldB027)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "text": "Weathersby, Dan"
                                                                                                            },
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(stdFieldB027)",
                                                                                                                "value": "Weathersby, Dan"
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailPropertyGutter headerLabelBackground"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailValueGutter"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "td",
                                                                                  "attributes": {
                                                                                    "width": "33%",
                                                                                    "height": "100%"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "table",
                                                                                      "attributes": {
                                                                                        "id": "Column|1458926653",
                                                                                        "width": "100%",
                                                                                        "cellpadding": "0",
                                                                                        "cellspacing": "0",
                                                                                        "border": "0",
                                                                                        "height": "100%",
                                                                                        "style": "border-collapse:collapse;"
                                                                                      },
                                                                                      "children": [
                                                                                        {
                                                                                          "tag": "tbody",
                                                                                          "attributes": {
                                                                                            
                                                                                          },
                                                                                          "children": [
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "height": "1"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailPropertyGutter headerLabelBackground"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailValueGutter"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|150007159"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Locker"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(stdLocker)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(stdLocker)",
                                                                                                                "value": ""
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|975796775"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Local ID"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(stdIDLocal)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "text": "8005179"
                                                                                                            },
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(stdIDLocal)",
                                                                                                                "value": "8005179"
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                "id": "Property|1138005283"
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "125",
                                                                                                    "class": "detailProperty headerLabelBackground",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "State ID"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "width": "*",
                                                                                                    "class": "detailValue",
                                                                                                    "nowrap": ""
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": " templateTextSmall"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "tag": "span",
                                                                                                          "attributes": {
                                                                                                            "id": "propertyValue(stdIDState)-span"
                                                                                                          },
                                                                                                          "children": [
                                                                                                            {
                                                                                                              "text": "1045962235"
                                                                                                            },
                                                                                                            {
                                                                                                              "tag": "input",
                                                                                                              "attributes": {
                                                                                                                "type": "hidden",
                                                                                                                "name": "propertyValue(stdIDState)",
                                                                                                                "value": "1045962235"
                                                                                                              },
                                                                                                              "children": [
                                                                                                                
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "tr",
                                                                                              "attributes": {
                                                                                                
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailPropertyGutter headerLabelBackground"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  "tag": "td",
                                                                                                  "attributes": {
                                                                                                    "class": "detailValueGutter"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "img",
                                                                                                      "attributes": {
                                                                                                        "src": "images/spacer.gif",
                                                                                                        "height": "1",
                                                                                                        "width": "1",
                                                                                                        "alt": " "
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "script",
                                                                  "attributes": {
                                                                    "language": "JavaScript"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "text": "if (isInternetExplorer()){\nvar divIDs = $('div[id^=collapsibleDiv]');\nvar maxHeight = 0;\nfor (var i = 0; i &lt; divIDs.length; i++){\nmaxHeight = 0;\nvar tableIDs = $('#mainTable table[id^=Column]',divIDs[i]);\nvar len = tableIDs.length;\nvar tableHeight = 0;\nfor(var j = 0; j &lt; len; j++){\ndocument.getElementById(tableIDs[j].id).setAttribute('style',\"height:\"+maxHeight+\";\");\ntableHeight = document.getElementById(tableIDs[j].id).offsetHeight;\nif (tableHeight &gt; maxHeight){\nmaxHeight = tableHeight;\nfor(var k = j; k &gt;= 0; k--){\ndocument.getElementById(tableIDs[k].id).setAttribute('style',\"height:\"+maxHeight+\";\");\n}\n}\n}\n}\n}"
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "tag": "script",
                                                                  "attributes": {
                                                                    "language": "JavaScript",
                                                                    "type": "text/javascript"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "text": "$(function()\n{\nsetDefaultFocus();\n});"
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          "tag": "tr",
                                                          "attributes": {
                                                            
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "colspan": "2"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "img",
                                                                  "attributes": {
                                                                    "src": "images/spacer.gif",
                                                                    "height": "10",
                                                                    "width": "1",
                                                                    "alt": " "
                                                                  },
                                                                  "children": [
                                                                    
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          "tag": "tr",
                                                          "attributes": {
                                                            
                                                          },
                                                          "children": [
                                                            {
                                                              "tag": "td",
                                                              "attributes": {
                                                                "colspan": "2"
                                                              },
                                                              "children": [
                                                                {
                                                                  "tag": "table",
                                                                  "attributes": {
                                                                    "id": "bottomButtonBar",
                                                                    "border": "0",
                                                                    "cellpadding": "0",
                                                                    "cellspacing": "0"
                                                                  },
                                                                  "children": [
                                                                    {
                                                                      "tag": "tbody",
                                                                      "attributes": {
                                                                        
                                                                      },
                                                                      "children": [
                                                                        {
                                                                          "tag": "tr",
                                                                          "attributes": {
                                                                            
                                                                          },
                                                                          "children": [
                                                                            {
                                                                              "tag": "td",
                                                                              "attributes": {
                                                                                
                                                                              },
                                                                              "children": [
                                                                                {
                                                                                  "tag": "script",
                                                                                  "attributes": {
                                                                                    "src": "js/tableLock.js?version=6.9.0.6.94",
                                                                                    "type": "text/javascript"
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "input",
                                                                                  "attributes": {
                                                                                    "type": "hidden",
                                                                                    "name": "independentSave",
                                                                                    "value": "null"
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "input",
                                                                                  "attributes": {
                                                                                    "type": "hidden",
                                                                                    "name": "savePrivileges",
                                                                                    "value": "null"
                                                                                  },
                                                                                  "children": [
                                                                                    
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "script",
                                                                                  "attributes": {
                                                                                    "type": "text/javascript"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "text": "if (typeof window.cancelPressed === 'undefined') {\nwindow.cancelPressed = false;\n}\nfunction triggerCustomEvent() {\nconst iframe = document.getElementById('olrIframe');\nif (iframe &amp;&amp; iframe.contentWindow) {\niframe.contentWindow.postMessage('triggerSaveAndClose', '*');\n}\ndoSubmit(940 , this.form);\nwindow.parent.doRefresh();\nconst saveButton = document.getElementById('saveCloseButton');\nsaveButton.parentNode.removeChild(saveButton);\nconst cancelButton = document.getElementById('cancelButton');\nconst buttonText = cancelButton.querySelector('.button-text');\nif (buttonText) {\nbuttonText.textContent = 'Close';\n}\nwindow.parent.doRefresh();\n}\nfunction doCustomCancel(form)\n{\nconst iframe = document.getElementById('olrIframe');\nif (window.cancelPressed) {\ndoSubmit(940 , this.form);\nwindow.cancelPressed = false;\n(new EmbeddedPopup()).close();\n} else {\ndoSubmit(940, form);\nconst saveButton = document.getElementById('saveCloseButton');\nconst cancelButton = document.getElementById('cancelButton');\nif (saveButton) saveButton.disabled = false;\nif (cancelButton) cancelButton.disabled = false;\nwindow.cancelPressed = true;\n}\nif (iframe &amp;&amp; iframe.contentWindow) {\niframe.contentWindow.postMessage('triggerClose', '*');\n}\n}"
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  "tag": "table",
                                                                                  "attributes": {
                                                                                    "border": "0",
                                                                                    "cellspacing": "0",
                                                                                    "cellpadding": "0"
                                                                                  },
                                                                                  "children": [
                                                                                    {
                                                                                      "tag": "tbody",
                                                                                      "attributes": {
                                                                                        
                                                                                      },
                                                                                      "children": [
                                                                                        {
                                                                                          "tag": "tr",
                                                                                          "attributes": {
                                                                                            
                                                                                          },
                                                                                          "children": [
                                                                                            {
                                                                                              "tag": "td",
                                                                                              "attributes": {
                                                                                                
                                                                                              },
                                                                                              "children": [
                                                                                                
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "td",
                                                                                              "attributes": {
                                                                                                
                                                                                              },
                                                                                              "children": [
                                                                                                {
                                                                                                  "tag": "button",
                                                                                                  "attributes": {
                                                                                                    "type": "button",
                                                                                                    "class": "button",
                                                                                                    "id": "cancelButton",
                                                                                                    "tabindex": "0",
                                                                                                    "name": "cancelButton",
                                                                                                    "onclick": "doSubmit(940, this.form);return false;"
                                                                                                  },
                                                                                                  "children": [
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": "fa fa-close fa-lg"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      "tag": "span",
                                                                                                      "attributes": {
                                                                                                        "class": "button-text"
                                                                                                      },
                                                                                                      "children": [
                                                                                                        {
                                                                                                          "text": "Cancel"
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              "tag": "td",
                                                                                              "attributes": {
                                                                                                "class": "extraButtons"
                                                                                              },
                                                                                              "children": [
                                                                                                
                                                                                              ]
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              "tag": "td",
                                                                              "attributes": {
                                                                                "id": "messageAreaBottom"
                                                                              },
                                                                              "children": [
                                                                                
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "tag": "script",
                                                  "attributes": {
                                                    "language": "JavaScript"
                                                  },
                                                  "children": [
                                                    {
                                                      "text": "window.onresize = resizeFrames;"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "tag": "script",
                                                  "attributes": {
                                                    "src": "js/detailAutoSave.js?version=6.9.0.6.94",
                                                    "type": "text/javascript"
                                                  },
                                                  "children": [
                                                    
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              "tag": "td",
                                              "attributes": {
                                                
                                              },
                                              "children": [
                                                
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "tag": "tr",
                                          "attributes": {
                                            
                                          },
                                          "children": [
                                            {
                                              "tag": "td",
                                              "attributes": {
                                                "height": "*",
                                                "class": "borderRight"
                                              },
                                              "children": [
                                                {
                                                  "tag": "img",
                                                  "attributes": {
                                                    "src": "images/spacer.gif",
                                                    "height": "1",
                                                    "width": "1",
                                                    "alt": " "
                                                  },
                                                  "children": [
                                                    
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "language": "JavaScript"
          },
          "children": [
            {
              "text": "function displayActionMessages(messagesArray, isErrorMessage)\n{\nvar messages = messagesArray.join(\"&lt;br&gt;\");\n\n\nshowMessageWindow(messages, isErrorMessage, false, 250);\nif(!isErrorMessage) {\n$(function(){$('#messageWindow').stop().animate({opacity: 1.0}, 2000).fadeTo(500, 0, closeMessageWindow);});\n}\n\n}"
            }
          ]
        },
        {
          "tag": "div",
          "attributes": {
            "id": "messageWindow"
          },
          "children": [
            {
              "tag": "img",
              "attributes": {
                "src": "images/spacer.gif",
                "height": "1",
                "width": "1",
                "alt": " "
              },
              "children": [
                
              ]
            }
          ]
        },
        {
          "tag": "script",
          "attributes": {
            "language": "JavaScript"
          },
          "children": [
            {
              "text": "setInitialMaximizedState('Maximize', 'Minimize');"
            }
          ]
        }
      ]
    }
  ]
}
        */

		const responseData = {
			name: name,
			yearOfGrade: yearOfGrade
		};

		return new Response(JSON.stringify(responseData), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: `something went wrong ${error}` }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
}

function htmlToJson(html) {
	const dom = new JSDOM(html);
	const document = dom.window.document;

	function elementToJSON(element) {
		const obj = {
			tag: element.tagName ? element.tagName.toLowerCase() : null,
			attributes: {},
			children: []
		};

		if (element.attributes) {
			for (let attr of element.attributes) {
				obj.attributes[attr.name] = attr.value;
			}
		}

		for (let child of element.childNodes) {
			if (child.nodeType === 3) {
				if (child.textContent.trim()) {
					obj.children.push({
						text: child.textContent.trim()
					});
				}
			} else if (child.nodeType === 1) {
				obj.children.push(elementToJSON(child));
			}
		}

		return obj;
	}

	return JSON.stringify(elementToJSON(document.documentElement));
}

function getJSONPath(json, path) {
	let element = JSON.parse(json);

	for (let index of path) {
		if (element.children && element.children[index]) {
			element = element.children[index];
		}
	}

	return JSON.stringify(element);
}
