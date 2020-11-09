import { createMuiTheme } from '@material-ui/core/styles'

const themeName = 'IncutTheme'

const palette = {
  primary: {
    light: '#4d7bbd',
    main: '#0b4f8c',
    dark: '#00285e',
    contrastText: '#fff'
  },
  secondary: {
    light: '#61af47',
    main: '#54973e',
    dark: '#488135',
    contrastText: '#000'
  },
  tertiary: {
    main: '#1792D6'
  },
  warning: {
    main: '#ffb224',
    dark: '#e79600'
  },
  error: {
    main: '#AF1F23'
  },
  success: {
    main: '#5EAE46'
  },
  background: {
    default: '#f5f5f5',
    paper: '#fff'
  },
  text: {
    primary: '#000',
    light: '#0000008a'
  },
  amphora: {
    blue: '#00AFCA',
    yellow: '#E6BC20',
    green: '#5EAE46',
    red: '#AF1F23',
    numbers: {
      negative: '#f00',
      positive: '#000'
    },
    fieldColors: {
      averagePricing: {
        backgroundColor: '#00ff0022'
      },
      pricing: {
        backgroundColor: '#ff000022'
      },
      spread: {
        backgroundColor: '#cccccc22'
      },
      scales: {
        backgroundColor: '#0000ff22'
      },
      backPricing: {
        backgroundColor: '#dd00dd22'
      },
      unpricing: {
        backgroundColor: '#ff990022'
      }
    }
  }
}

const typography = {
  fontFamily: 'Montserrat, sans-serif',
  fontFamilySecondary: "'Noto Serif', serif",
  useNextVariants: true,
  h1: {
    color: palette.primary.main,
    fontSize: 38,
    letterSpacing: 0,
    fontWeight: 300
  },
  h2: {
    color: palette.secondary.main,
    fontSize: 36,
    fontWeight: 300
  },
  h3: {
    color: palette.secondary.main,
    fontSize: 32,
    fontWeight: 300
  },
  h4: {
    color: palette.secondary.main,
    fontSize: 28,
    fontWeight: 300
  },
  h5: {
    color: palette.secondary.main,
    fontSize: 24,
    fontWeight: 300
  },
  h6: {
    color: palette.secondary.main,
    fontSize: 20,
    fontWeight: 300
  },
  subtitle1: {
    fontSize: 18
  },
  body1: {
    fontWeight: 'normal',
    fontSize: 14
  },
  body2: {
    fontSize: 12
  }
}

const IncutTheme = createMuiTheme({ palette, typography, themeName })

IncutTheme.overrides = {
  MuiCssBaseline: {
    '@global': {
      '@font-face': typography.fontFamily
    }
  },
  MuiPaper: {
    root: {
      padding: IncutTheme.spacing(5, 5, 7)
    }
  },
  MuiPopover: {
    paper: {
      padding: 0,
      backgroundColor: IncutTheme.palette.background.paper
    }
  },
  MuiAppBar: {
    root: {
      '&&': {
        padding: '0 0'
      }
    }
  },
  MuiTooltip: {
    tooltip: {
      fontSize: '11px'
    }
  },
  MuiListItem: {
    button: {
      '&&': {
        color: 'inherit',
        transition: 'background-color 0.5s ease'
      },
      '&:hover': {
        transition: 'background-color 0.25s ease'
      }
    }
  },
  MuiListItemIcon: {
    root: {
      '&&': {
        color: 'inherit',
        marginRight: IncutTheme.spacing(1),
        minWidth: 'auto',
        '& svg': {
          fontSize: 20
        }
      }
    }
  },
  MuiTabs: {
    indicator: {
      '&&': {
        top: 0,
        height: IncutTheme.spacing(0.25)
      }
    },
    root: {
      '&&': {
        backgroundColor: 'transparent'
      }
    }
  },
  MuiTab: {
    root: {
      '&&': {
        transition: 'background-color 0.5s ease',
        fontSize:10
      },
      '&:hover': {
        backgroundColor: IncutTheme.palette.background.default,
        color: IncutTheme.palette.primary.main,
        transition: 'background-color 0.25s ease'
      },

      '&$selected': {
        backgroundColor: IncutTheme.palette.background.default,
        color: IncutTheme.palette.primary.main,
        '&:hover': {
          backgroundColor: IncutTheme.palette.background.default,
          color: IncutTheme.palette.primary.main
        }
      }
    }
  },
  MuiButton: {
    root: {
      '&&': {
        margin: IncutTheme.spacing(0.5)
      }
    },
    outlined: {
      '&&': {
        color: IncutTheme.palette.text.light,
        border: '1px solid #635e5e8a'
      }
    }
  },
  MuiButtonGroup: {
    grouped: {
      '&&': {
        margin: IncutTheme.spacing(0)
      }
    }
  },
  MuiLinearProgress: {
    root: {
      '&&': {
        backgroundColor: IncutTheme.palette.background.default
      }
    }
  },
  MuiTableRow: {
    root: {
      '&:hover': {
        backgroundColor: IncutTheme.palette.background.default,
        color: IncutTheme.palette.primary.main
      }
    }
  },
  MuiTableCell: {
    root: {
      '&&': {
        color: IncutTheme.palette.text.light,
        // padding: IncutTheme.spacing(1.5),
        borderBottom: 'none'
      }
    },
    head: {
      '&&': {
        color: IncutTheme.palette.text.primary,
        textTransform: 'uppercase',
        //padding: theme.spacing(1.5),
        borderBottom: '1px solid rgba(224, 224, 224, 1)'
      }
    }
  },
  MuiStepper: {
    root: {
      '&&': {
        padding: IncutTheme.spacing(2, 0),
        marginTop: IncutTheme.spacing(2),
        marginBottom: IncutTheme.spacing(2),
        background: IncutTheme.palette.background.default
      }
    }
  },
  MuiStepIcon: {
    root: {
      '&&': {
        fontSize: IncutTheme.spacing(4)
      }
    }
  },
  MuiStepConnector: {
    root: {
      '&&': {
        top: IncutTheme.spacing(2)
      }
    }
  },
  MuiStepLabel: {
    label: {
      '&&': {
        fontSize: 10,
        marginTop: IncutTheme.spacing(0.5)
      }
    }
  },
  MuiTypography: {
    gutterBottom: {
      marginBottom: '0.35em !important'
    }
  },
  MuiDivider: {
    root: {
      '&&': {
        width: '100%',
        margin: IncutTheme.spacing(0.5)
      }
    }
  },
  MuiCard: {
    root: {
      '&&': {
        // marginBottom: '20px'
      }
    }
  },
  MuiChip: {
    root: {
      '&&': {
        marginRight: IncutTheme.spacing(0.5)
      }
    },
    iconSmall: {
      '&&': {
        width: '18px !important',
        height: '18px !important',
        marginLeft: '4px !important',
        marginRight: '-4px !important'
      }
    }
  },
  MuiDialog: {
    paper: {
      '&&': {
        overflow: 'visible',
        padding: IncutTheme.spacing(1),
        minWidth: '300px'
      }
    }
  },
  MuiDialogContent: {
    root: {
      '&&': {
        overflowY: 'initial'
      }
    }
  },
  MuiDialogActions: {
    root: {
      '&&': {
        padding: IncutTheme.spacing(1, 3)
      }
    }
  },
  MuiDrawer: {
    paper: {
      '&&': {
        padding: IncutTheme.spacing(0)
      }
    }
  },
  MuiBadge: {
    colorPrimary: {
      '&&': {
        color: IncutTheme.palette.text.light,
        backgroundColor: '#d3d3d3'
      }
    },
    colorSecondary: {
      '&&': {
        color: IncutTheme.palette.text.light,
        backgroundColor: IncutTheme.palette.warning.light
      }
    },
    root: {
      '&&': { display: 'flex', alignItems: 'center' }
    }
  },
  MuiOutlinedInput: {
    input: {
      '&&': {
        textAlign: 'left !important'
      }
    }
  }
}

export default IncutTheme
