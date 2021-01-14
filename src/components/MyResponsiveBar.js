import { ResponsiveBar } from '@nivo/bar';


const MyResponsiveBar = () => (

    <ResponsiveBar
        data={
            [
                {
                  "country": "AD",
                  "hot dog": 182,
                  "hot dogColor": "hsl(306, 70%, 50%)",
                  "burger": 126,
                  "burgerColor": "hsl(2, 70%, 50%)",
                  "sandwich": 140,
                  "sandwichColor": "hsl(252, 70%, 50%)",
                  "kebab": 58,
                  "kebabColor": "hsl(191, 70%, 50%)",
                  "fries": 67,
                  "friesColor": "hsl(345, 70%, 50%)",
                  "donut": 135,
                  "donutColor": "hsl(214, 70%, 50%)"
                },
                {
                  "country": "AE",
                  "hot dog": 144,
                  "hot dogColor": "hsl(176, 70%, 50%)",
                  "burger": 23,
                  "burgerColor": "hsl(261, 70%, 50%)",
                  "sandwich": 47,
                  "sandwichColor": "hsl(202, 70%, 50%)",
                  "kebab": 58,
                  "kebabColor": "hsl(317, 70%, 50%)",
                  "fries": 140,
                  "friesColor": "hsl(247, 70%, 50%)",
                  "donut": 12,
                  "donutColor": "hsl(98, 70%, 50%)"
                },
                {
                  "country": "AF",
                  "hot dog": 188,
                  "hot dogColor": "hsl(228, 70%, 50%)",
                  "burger": 165,
                  "burgerColor": "hsl(309, 70%, 50%)",
                  "sandwich": 52,
                  "sandwichColor": "hsl(75, 70%, 50%)",
                  "kebab": 121,
                  "kebabColor": "hsl(132, 70%, 50%)",
                  "fries": 143,
                  "friesColor": "hsl(70, 70%, 50%)",
                  "donut": 110,
                  "donutColor": "hsl(223, 70%, 50%)"
                },
                {
                  "country": "AG",
                  "hot dog": 87,
                  "hot dogColor": "hsl(195, 70%, 50%)",
                  "burger": 48,
                  "burgerColor": "hsl(243, 70%, 50%)",
                  "sandwich": 83,
                  "sandwichColor": "hsl(258, 70%, 50%)",
                  "kebab": 86,
                  "kebabColor": "hsl(45, 70%, 50%)",
                  "fries": 151,
                  "friesColor": "hsl(245, 70%, 50%)",
                  "donut": 184,
                  "donutColor": "hsl(236, 70%, 50%)"
                },
                {
                  "country": "AI",
                  "hot dog": 7,
                  "hot dogColor": "hsl(206, 70%, 50%)",
                  "burger": 17,
                  "burgerColor": "hsl(48, 70%, 50%)",
                  "sandwich": 111,
                  "sandwichColor": "hsl(316, 70%, 50%)",
                  "kebab": 158,
                  "kebabColor": "hsl(176, 70%, 50%)",
                  "fries": 187,
                  "friesColor": "hsl(48, 70%, 50%)",
                  "donut": 29,
                  "donutColor": "hsl(76, 70%, 50%)"
                },
                {
                  "country": "AL",
                  "hot dog": 169,
                  "hot dogColor": "hsl(166, 70%, 50%)",
                  "burger": 20,
                  "burgerColor": "hsl(62, 70%, 50%)",
                  "sandwich": 69,
                  "sandwichColor": "hsl(65, 70%, 50%)",
                  "kebab": 129,
                  "kebabColor": "hsl(264, 70%, 50%)",
                  "fries": 36,
                  "friesColor": "hsl(204, 70%, 50%)",
                  "donut": 175,
                  "donutColor": "hsl(331, 70%, 50%)"
                },
                {
                  "country": "AM",
                  "hot dog": 195,
                  "hot dogColor": "hsl(118, 70%, 50%)",
                  "burger": 160,
                  "burgerColor": "hsl(196, 70%, 50%)",
                  "sandwich": 64,
                  "sandwichColor": "hsl(97, 70%, 50%)",
                  "kebab": 99,
                  "kebabColor": "hsl(249, 70%, 50%)",
                  "fries": 156,
                  "friesColor": "hsl(330, 70%, 50%)",
                  "donut": 68,
                  "donutColor": "hsl(274, 70%, 50%)"
                }
              ]
        }
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', '1.3' ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)
export default MyResponsiveBar;