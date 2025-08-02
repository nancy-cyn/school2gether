import React from 'react';

function Student() {
  return (
    <>
      <div style={{
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        overflowX: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {/* Desktop Layout (original code) */}
        <div className="desktop-layout">
          <div style={{
            width: '100%',
            height: '1000.99px',
            background: '#84B2FBEB',
            position: 'relative',
          }}>
            {/* Second Ellipse */}
            <div style={{
              width: '751.67px',
              height: '751.67px',
              backgroundColor: '#E9DEE7',
              borderRadius: '50%',
              position: 'absolute',
              top: '-44.67px',
              left: '797px',
              zIndex: 0,
            }}></div>
          </div>

          {/* Light Pink Rectangle with Button */}
          <div style={{
            position: 'absolute',
            top: '692px',
            left: '82px',
            zIndex: 2,
          }}>
            <div style={{
              width: '128px',
              height: '126px',
              backgroundColor: '#FFD1D9',
              borderRadius: '27.5px',
            }}></div>
            <div style={{
              position: 'absolute',
              width: '85.83px',
              height: 'fit-content',
              top: '85.67px',
              left: '20.83px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8.33px',
            }}>
              <button style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '55px',
                height: '23.33px',
                padding: '6.67px 15px',
                borderRadius: '10.83px',
                backgroundColor: '#D07F8D',
                border: 'none',
                gap: '2.5px',
                margin: '0 auto',
                cursor: 'pointer'
              }}>
                <span style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  fontSize: '8.33px',
                  lineHeight: '100%',
                  color: 'white',
                  textTransform: 'uppercase',
                }}>
                  Teacher
                </span>
              </button>
            </div>
          </div>

          {/* Parent Image */}
          <img
            src="/images/parent.png"
            alt="Teacher"
            style={{
              width: '201px',
              height: '134px',
              position: 'absolute',
              top: '633px',
              left: '34px',
              zIndex: 2,
              objectFit: 'cover',
            }}
          />

          {/* Pink Rectangle with Button */}
          <div style={{
            position: 'absolute',
            top: '675.17px',
            left: '237.83px',
            zIndex: 2,
          }}>
            <div style={{
              width: '127.5px',
              height: '125.83px',
              backgroundColor: '#FFDDF6',
              borderRadius: '27.5px',
            }}></div>
            <div style={{
              position: 'absolute',
              width: '85.83px',
              height: '17.79px',
              top: '65.46px',
              left: '20.84px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8.33px',
            }}>
              <button style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50px',
                height: '23.33px',
                padding: '6.67px 15px',
                borderRadius: '10.83px',
                backgroundColor: '#F09ADA',
                border: 'none',
                gap: '2.5px',
                margin: '0 auto',
                cursor: 'pointer'
              }}>
                <span style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  fontSize: '8.33px',
                  lineHeight: '100%',
                  color: 'white',
                  textTransform: 'uppercase',
                }}>
                  Tutor
                </span>
              </button>
            </div>
          </div>

          {/* Tutor Image */}
          <img
            src="/images/teacher.png"
            alt="Parent"
            style={{
              width: '203px',
              height: '142px',
              position: 'absolute',
              top: '584px',
              left: '204px',
              zIndex: 2,
              objectFit: 'cover',
            }}
          />

          {/* Orange Rectangle */}
          <div style={{
            width: '127px',
            height: '126px',
            position: 'absolute',
            top: '692px',
            left: '404px',
            backgroundColor: '#FFE4C5',
            borderRadius: '27.5px',
            zIndex: 2,
          }}></div>

          {/* Student Button Container */}
          <div style={{
            position: 'absolute',
            width: '85.83px',
            height: 'fit-content',
            top: '777.75px',
            left: '424.67px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8.33px',
            zIndex: 2,
          }}>
            <button style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '60px',
              height: '23.33px',
              padding: '6.67px 15px',
              borderRadius: '10.83px',
              backgroundColor: '#F4B770',
              border: 'none',
              gap: '2.5px',
              margin: '0 auto',
              cursor: 'pointer'
            }}>
              <span style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                fontSize: '8.33px',
                lineHeight: '100%',
                color: 'white',
                textTransform: 'uppercase',
              }}>
                Student
              </span>
            </button>
          </div>

          {/* Student Image */}
          <img
            src="/images/student.png"
            alt="Student"
            style={{
              width: '194px',
              height: '194px',
              position: 'absolute',
              top: '596px',
              left: '373px',
              zIndex: 2,
              objectFit: 'cover',
            }}
          />

          {/* Navbar */}
          <div style={{
            width: '100%',
            height: '51px',
            position: 'absolute',
            top: '0',
            background: 'linear-gradient(to right, #0078A6, #5DE0E6)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: 2,
          }}>
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{
                width: '197.69px',
                height: '55px',
                position: 'absolute',
                top: '-2.08px',
                left: '10px',
              }}
            />
          </div>

          {/* First Ellipse */}
          <div style={{
            width: '490px',
            height: '490px',
            backgroundColor: '#D1EEE9',
            borderRadius: '50%',
            position: 'absolute',
            top: '516.83px',
            left: '670.83px',
            zIndex: 1,
          }}></div>

          {/* Teacher Image */}
          <img
            src="/images/student.png"
            alt="Teacher"
            style={{
              width: '927px',
              height: '649px',
              position: 'absolute',
              top: '135px',
              left: '609px',
              zIndex: 1,
            }}
          />

          {/* Content Box */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '602.5px',
            position: 'absolute',
            top: '245.92px',
            left: '115px',
            gap: '40px',
            zIndex: 2,
          }}>
            <h1 style={{
              width: '602.5px',
              height: '79px',
              margin: 0,
              fontFamily: 'sans-serif',
              fontWeight: 800,
              fontSize: '66.67px',
              lineHeight: '74px',
              color: '#74526A',
            }}>
              I am a Student
            </h1>

            <p style={{
              width: '494.17px',
              height: '80px',
              margin: 0,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              fontSize: '18.33px',
              lineHeight: '26.67px',
              color: '#2A2A2ACC',
            }}>
Learn your way with expert tutors, study tools, and fun challenges designed just for you. Set goals, track progress, and grow your skills at your own pace.            </p>

            <button style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 'fit-content',
              height: '46.67px',
              padding: '13.33px 20px',
              borderRadius: '83.33px',
              backgroundColor: '#EE3B42',
              border: 'none',
              cursor: 'pointer',
            }}>
              <span style={{
                width: '168px',
                height: '20px',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                fontSize: '16.67px',
                lineHeight: '100%',
                color: 'white',
                textAlign: 'center',
              }}>
                Continue as a Student
              </span>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="mobile-layout" style={{
          backgroundColor: '#84B2FBEB',
          minHeight: '100vh'
        }}>
          {/* Navbar */}
          <div style={{
            width: '100%',
            height: '51px',
            background: 'linear-gradient(to right, #0078A6, #5DE0E6)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            position: 'relative',
          }}>
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{
                width: '197.69px',
                height: '55px',
                position: 'absolute',
                top: '-2px',
                left: '10px',
              }}
            />
          </div>

          {/* Welcome Text - Updated */}
          <div style={{
            padding: '25px 15px 15px',
            textAlign: 'center',
            fontFamily: '"Brush Script MT", cursive, "Lucida Handwriting", serif',
            fontSize: '28px',
            fontWeight: '600',
            color: '#5D3A4B',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            letterSpacing: '0.5px',
            lineHeight: '1.3',
            fontStyle: 'italic'
          }}>
            Welcome to <span style={{
              display: 'inline-block',
              fontStyle: 'normal',
              fontWeight: '700',
              color: '#8B4513',
              transform: 'rotate(-5deg)',
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '3px',
              fontFamily: 'cursive, "Brush Script MT", serif'
            }}>school2gether</span>
          </div>

          {/* Vertical Boxes Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            padding: '20px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>

            {/* Parent Box */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              padding: '20px',
              backgroundColor: '#FFD1D960',
              borderRadius: '20px',
              backdropFilter: 'blur(5px)'
            }}>
              <img
                src="/images/parent.png"
                alt="Parent"
                style={{
                  width: '100%',
                  maxWidth: '201px',
                  height: 'auto',
                  aspectRatio: '201/134',
                  objectFit: 'contain'
                }}
              />
              <button style={{
                padding: '12px 25px',
                borderRadius: '10px',
                backgroundColor: '#D07F8D',
                border: 'none',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '150px'
              }}>
                Parent
              </button>
            </div>

            {/* Tutor Box */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              padding: '20px',
              backgroundColor: '#FFDDF660',
              borderRadius: '20px',
              backdropFilter: 'blur(5px)'
            }}>
              <img
                src="/images/teacher.png"
                alt="Tutor"
                style={{
                  width: '100%',
                  maxWidth: '203px',
                  height: 'auto',
                  aspectRatio: '203/142',
                  objectFit: 'contain'
                }}
              />
              <button style={{
                padding: '12px 25px',
                borderRadius: '10px',
                backgroundColor: '#F09ADA',
                border: 'none',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '150px'
              }}>
                Tutor
              </button>
            </div>

            {/* Student Box */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              padding: '20px',
              backgroundColor: '#FFE4C560',
              borderRadius: '20px',
              backdropFilter: 'blur(5px)'
            }}>
              <img
                src="/images/student.png"
                alt="Student"
                style={{
                  width: '100%',
                  maxWidth: '194px',
                  height: 'auto',
                  aspectRatio: '1/1',
                  objectFit: 'contain'
                }}
              />
              <button style={{
                padding: '12px 25px',
                borderRadius: '10px',
                backgroundColor: '#F4B770',
                border: 'none',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '150px'
              }}>
                Student
              </button>
            </div>
          </div>
        </div>

        {/* Media Queries */}
        <style>{`
          .mobile-layout {
            display: none;
          }
          
          @media (max-width: 1024px) {
            .desktop-layout {
              display: none;
            }
            .mobile-layout {
              display: block;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Student;