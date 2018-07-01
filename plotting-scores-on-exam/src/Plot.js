import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

export default class Prot extends React.Component {
  getStudents() {
    return [
      { id: 1, name: 'SCOTT', maxScore: 70, latestScore: 70 },
      { id: 2, name: 'TIGER', maxScore: 64, latestScore: 54 },
      { id: 3, name: 'JOHN', maxScore: 20, latestScore: 20 },
      { id: 4, name: 'MIKE', maxScore: 100, latestScore: 100 },
      { id: 5, name: 'TANAKA', maxScore: 100, latestScore: 100 }
    ]
  }

  constructor(props) {
    super(props)
    this.state = {
      students: this.getStudents()
    }
  }

  render() {
    //
    // 10 - 19
    // 20 - 29
    // 30 - 39
    // 40 - 49
    // 50 - 59
    // 60 - 69
    // 70 - 79
    // 80 - 89
    // 90 - 99
    // 100
    const scoreDistribution = [
      {
        sectionName: '0 - 9',
        sectionButtom: 0,
        sectionTop: 9,
        maxScore: null,
        latestScore: null,
        maxNum: 0,
        latestNum: 0
      },
      {
        sectionName: '10 - 19',
        sectionButtom: 10,
        sectionTop: 19,
        maxScore: null,
        latestScore: null,
        maxNum: 0,
        latestNum: 0
      },
      {
        sectionName: '20 - 29',
        sectionButtom: 20,
        sectionTop: 29,
        maxScore: null,
        latestScore: null,
        maxNum: 0,
        latestNum: 0
      },
      {
        sectionName: '30 - 39',
        sectionButtom: 30,
        sectionTop: 39,
        maxScore: null,
        latestScore: null,
        maxNum: 0,
        latestNum: 0
      },
      {
        sectionName: '40 - 49',
        sectionButtom: 40,
        sectionTop: 49,
        maxScore: null,
        latestScore: null,
        maxNum: 0,
        latestNum: 0
      },
      {
        sectionName: '50 - 59',
        sectionButtom: 50,
        sectionTop: 59,
        maxScore: null,
        latestScore: null,
        maxNum: 0,
        latestNum: 0
      },
      {
        sectionName: '60 - 69',
        sectionButtom: 60,
        sectionTop: 69,
        maxScore: null,
        latestScore: null,
        maxNum: 0,
        latestNum: 0
      },
      {
        sectionName: '70 - 79',
        sectionButtom: 70,
        sectionTop: 79,
        maxScore: null,
        latestScore: null,
        maxNum: 0,
        latestNum: 0
      },
      {
        sectionName: '80 - 89',
        sectionButtom: 80,
        sectionTop: 89,
        maxScore: null,
        latestScore: null,
        maxNum: 0,
        latestNum: 0
      },
      {
        sectionName: '90 - 99',
        sectionButtom: 90,
        sectionTop: 99,
        maxScore: null,
        latestScore: null,
        maxNum: 0,
        latestNum: 0
      },
      {
        sectionName: '100',
        sectionButtom: 100,
        sectionTop: 100,
        maxScore: null,
        latestScore: null,
        maxNum: 0,
        latestNum: 0
      }
    ]

    let data = null

    this.state.students.forEach(student => {
      const maxScore = student.maxScore
      const latestScore = student.latestScore
      const updatedMaxScore = scoreDistribution.map(section => {
        const sectionButtom = section.sectionButtom
        const sectionTop = section.sectionTop
        if (sectionButtom <= maxScore && maxScore <= sectionTop) {
          if (!section.maxScore) {
            section.maxScore = maxScore
            section.maxNum = section.maxNum + 1
          } else if (section.maxScore === maxScore) {
            section.maxNum = section.maxNum + 1
          } else if (section.maxScore < maxScore) {
            section.maxNum = 1
          }
        }
        return section
      })
      data = updatedMaxScore.map(section => {
        const sectionButtom = section.sectionButtom
        const sectionTop = section.sectionTop
        if (sectionButtom <= latestScore && latestScore <= sectionTop) {
          if (!section.latestScore) {
            section.latestScore = latestScore
            section.latestNum = section.latestNum + 1
          } else if (section.latestScore === latestScore) {
            section.latestNum = section.latestNum + 1
          } else if (section.latestScore < latestScore) {
            section.latestNum = 1
          }
        }
        return section
      })
    })

    return (
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sectionName" interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="maxNum" fill="#8884d8" />
        <Bar dataKey="latestNum" fill="#82ca9d" />
      </BarChart>
    )
  }
}
