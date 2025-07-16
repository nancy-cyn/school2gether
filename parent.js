import React from 'react';

function Parent() {
  return (
    // React Fragment to wrap top-level elements
    <>
      <div style={{
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden', // Clips the overflowing part of the ellipse
        fontFamily: 'system-ui, -apple-system, sans-serif' // Default system fonts
      }}>
        {/* Background Layout Container (includes the navbar space) */}
        <div style={{
          width: '100%',
          height: '981.83px', // 930.83px + 51px (navbar height)
          background: '#84B2FBEB',
          position: 'relative',
        }}>
          {/* Second Ellipse  - BEHIND everything */}
          <div style={{
            width: '751.67px',
            height: '751.67px',
            backgroundColor: '#FFD1D1',
            borderRadius: '50%',
            position: 'absolute',
            top: '-44.67px', // Original position
            left: '797px', // Original position
            zIndex: 0, // Lowest layer
          }}></div>
        </div>
        {/* Light Pink Rectangle with Button Container */}
        <div style={{
          position: 'absolute',
          top: '692px',
          left: '82px',
          zIndex: 2,
        }}>
          {/* Rectangle */}
          <div style={{
            width: '128px',
            height: '126px',
            backgroundColor: '#FFD1D9',
            borderRadius: '27.5px',
          }}></div>

          {/* Button Container */}
          <div style={{
            position: 'absolute',
            width: '85.83px',
            height: 'fit-content', // Hug height
            top: '85.67px', // Relative positioning
            left: '20.83px', // Relative positioning
            display: 'flex',
            flexDirection: 'column',
            gap: '8.33px',
          }}>
            <button style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '55px', // Hug width
              height: '23.33px',
              padding: '6.67px 15px',
              borderRadius: '10.83px',
              backgroundColor: '#D07F8D',
              border: 'none',
              gap: '2.5px',
              margin: '0 auto', // Horizontal centering
              cursor:'pointer'
            }}>
              <span style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                fontSize: '8.33px',
                lineHeight: '100%',
                color: 'white',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>
                Teacher
              </span>
            </button>
          </div>
        </div>
        {/* Parent Small Image */}
        <img
          src="/images/parent.png"
          alt="Teacher"
          style={{
            width: '201px',
            height: '134px',
            position: 'absolute',
            top: '633px',
            left: '34px',
            zIndex: 2, // Same as other content elements
            objectFit: 'cover', // Ensures image fills container
          }}
        />
        {/* Pink Rectangle with Button Container */}
        <div style={{
          position: 'absolute',
          top: '675.17px',
          left: '237.83px',
          zIndex: 2,
        }}>
          {/* Pink Rectangle */}
          <div style={{
            width: '127.5px',
            height: '125.83px',
            backgroundColor: '#FFDDF6',
            borderRadius: '27.5px',
          }}></div>

          {/* Button Container (Vertical Flow) */}
          <div style={{
            position: 'absolute',
            width: '85.83px',
            height: '17.79px',
            top: '65.46px', // Relative positioning
            left: '20.84px', // Relative positioning
            display: 'flex',
            flexDirection: 'column',
            gap: '8.33px',
          }}>
            <button style={{
              display: 'flex',
              flexDirection: 'row',
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
                whiteSpace: 'nowrap',
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
            zIndex: 2, // Same layer as other content
            objectFit: 'cover', // Maintains aspect ratio
          }}
        />
        {/* Rounded Rectangle */}
        <div style={{
          width: '127px',
          height: '126px',
          position: 'absolute',
          top: '692px',
          left: '404px',
          backgroundColor: '#FFE4C5',
          borderRadius: '27.5px', // Rounded corners
          zIndex: 2, // Same layer as other content
        }}></div>
        {/* Vertical Button Container */}
        <div style={{
          position: 'absolute',
          width: '85.83px', // Fixed width
          height: 'fit-content', // Hug height
          top: '777.75px',
          left: '424.67px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8.33px', // Vertical gap
          zIndex: 2,
        }}>
          {/* Student Button - Exact Layout */}
          <button style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60px', // Hug width
            height: '23.33px',
            padding: '6.67px 15px',
            borderRadius: '10.83px',
            backgroundColor: '#F4B770',
            border: 'none',
            gap: '2.5px',
            margin: '0 auto', // Horizontal centering
            cursor: 'pointer'
          }}>
            <span style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              fontSize: '8.33px',
              lineHeight: '100%',
              color: 'white',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
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
            zIndex: 2, // Same layer as other images
            objectFit: 'cover',
          }}
        />

        {/* Navbar (floats above everything) */}
        <div style={{
          width: '100%',
          height: '51px',
          position: 'absolute', // Changed to absolute
          top: '0',
          background: 'linear-gradient(to right, #0078A6, #5DE0E6)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          zIndex: 2, // Highest priority
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


        {/* First Ellipse  - MIDDLE layer */}
        <div style={{
          width: '490px',
          height: '490px',
          backgroundColor: '#FEDCBD',
          borderRadius: '50%',
          position: 'absolute',
          top: '516.83px', // 465.83px + 51px (navbar height)
          left: '670.83px',
          zIndex: 1,
        }}></div>
        {/* Teacher Image - Middle layer */}
        <img
          src="/images/parent.png"
          alt="Teacher"
          style={{
            width: '927px',
            height: '649px',
            position: 'absolute',
            top: '135px',
            left: '609px',
            zIndex: 1, // Above purple ellipse but below navbar and mint ellipse
          }}
        />
      </div>
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
        {/* Title */}
        <h1 style={{
          width: '602.5px',
          height: '79px',
          margin: 0,
          fontFamily: 'sans-serif', // Using system sans-serif as Gabarito alternative
          fontWeight: 800,
          fontSize: '66.67px',
          lineHeight: '74px',
          color: '#EE3B42',
        }}>
          I am a Parent
        </h1>

        {/* Description */}
        <p style={{
          width: '494.17px',
          height: '80px',
          margin: 0,
          fontFamily: 'system-ui, -apple-system, sans-serif', // SF Pro alternative
          fontWeight: 400,
          fontSize: '18.33px',
          lineHeight: '26.67px',
          color: '#2A2A2ACC', // With alpha channel
        }}>
            Get access to trusted tutors and tailored learning support for your child. Easily monitor their progress, manage bookings, and stay involved every step of the way.        </p>

        {/* Button */}
        <button style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'fit-content', // Hug width
          height: '46.67px',
          padding: '13.33px 20px',
          borderRadius: '83.33px',
          backgroundColor: '#EE3B42',
          border: 'none',
          cursor: 'pointer',
        }}>
          <span style={{
            width: '158px',
            height: '20px',
            fontFamily: 'Inter, system-ui, sans-serif', // Inter alternative
            fontWeight: 600,
            fontSize: '16.67px',
            lineHeight: '100%',
            color: 'white',
            textAlign: 'center',
          }}>
            Continue as a Parent
          </span>
        </button>

      </div>
    </>
  );
}

export default Parent;