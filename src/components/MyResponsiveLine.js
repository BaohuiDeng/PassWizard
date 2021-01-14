import { ResponsiveLine } from '@nivo/line'


const MyResponsiveLine = () => (
    <ResponsiveLine
        data={
            
            [
                {
                  "id": "japan",
                  "color": "hsl(239, 70%, 50%)",
                  "data": [
                    {
                      "x": "plane",
                      "y": 50
                    },
                    {
                      "x": "helicopter",
                      "y": 65
                    },
                    {
                      "x": "boat",
                      "y": 108
                    },
                    {
                      "x": "train",
                      "y": 281
                    },
                    {
                      "x": "subway",
                      "y": 123
                    },
                    {
                      "x": "bus",
                      "y": 67
                    },
                    {
                      "x": "car",
                      "y": 103
                    },
                    {
                      "x": "moto",
                      "y": 223
                    },
                    {
                      "x": "bicycle",
                      "y": 111
                    },
                    {
                      "x": "horse",
                      "y": 199
                    },
                    {
                      "x": "skateboard",
                      "y": 273
                    },
                    {
                      "x": "others",
                      "y": 97
                    }
                  ]
                },
                {
                  "id": "france",
                  "color": "hsl(185, 70%, 50%)",
                  "data": [
                    {
                      "x": "plane",
                      "y": 171
                    },
                    {
                      "x": "helicopter",
                      "y": 76
                    },
                    {
                      "x": "boat",
                      "y": 297
                    },
                    {
                      "x": "train",
                      "y": 217
                    },
                    {
                      "x": "subway",
                      "y": 8
                    },
                    {
                      "x": "bus",
                      "y": 49
                    },
                    {
                      "x": "car",
                      "y": 59
                    },
                    {
                      "x": "moto",
                      "y": 82
                    },
                    {
                      "x": "bicycle",
                      "y": 164
                    },
                    {
                      "x": "horse",
                      "y": 135
                    },
                    {
                      "x": "skateboard",
                      "y": 227
                    },
                    {
                      "x": "others",
                      "y": 169
                    }
                  ]
                },
                {
                  "id": "us",
                  "color": "hsl(95, 70%, 50%)",
                  "data": [
                    {
                      "x": "plane",
                      "y": 163
                    },
                    {
                      "x": "helicopter",
                      "y": 80
                    },
                    {
                      "x": "boat",
                      "y": 166
                    },
                    {
                      "x": "train",
                      "y": 191
                    },
                    {
                      "x": "subway",
                      "y": 53
                    },
                    {
                      "x": "bus",
                      "y": 34
                    },
                    {
                      "x": "car",
                      "y": 217
                    },
                    {
                      "x": "moto",
                      "y": 196
                    },
                    {
                      "x": "bicycle",
                      "y": 242
                    },
                    {
                      "x": "horse",
                      "y": 232
                    },
                    {
                      "x": "skateboard",
                      "y": 148
                    },
                    {
                      "x": "others",
                      "y": 292
                    }
                  ]
                },
                {
                  "id": "germany",
                  "color": "hsl(170, 70%, 50%)",
                  "data": [
                    {
                      "x": "plane",
                      "y": 20
                    },
                    {
                      "x": "helicopter",
                      "y": 247
                    },
                    {
                      "x": "boat",
                      "y": 126
                    },
                    {
                      "x": "train",
                      "y": 229
                    },
                    {
                      "x": "subway",
                      "y": 31
                    },
                    {
                      "x": "bus",
                      "y": 120
                    },
                    {
                      "x": "car",
                      "y": 114
                    },
                    {
                      "x": "moto",
                      "y": 38
                    },
                    {
                      "x": "bicycle",
                      "y": 141
                    },
                    {
                      "x": "horse",
                      "y": 115
                    },
                    {
                      "x": "skateboard",
                      "y": 253
                    },
                    {
                      "x": "others",
                      "y": 114
                    }
                  ]
                },
                {
                  "id": "norway",
                  "color": "hsl(104, 70%, 50%)",
                  "data": [
                    {
                      "x": "plane",
                      "y": 241
                    },
                    {
                      "x": "helicopter",
                      "y": 169
                    },
                    {
                      "x": "boat",
                      "y": 269
                    },
                    {
                      "x": "train",
                      "y": 246
                    },
                    {
                      "x": "subway",
                      "y": 237
                    },
                    {
                      "x": "bus",
                      "y": 238
                    },
                    {
                      "x": "car",
                      "y": 94
                    },
                    {
                      "x": "moto",
                      "y": 155
                    },
                    {
                      "x": "bicycle",
                      "y": 119
                    },
                    {
                      "x": "horse",
                      "y": 61
                    },
                    {
                      "x": "skateboard",
                      "y": 101
                    },
                    {
                      "x": "others",
                      "y": 118
                    }
                  ]
                }
              ]
        }
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default MyResponsiveLine;