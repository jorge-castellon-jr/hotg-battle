import React from 'react'
import { Stack } from 'tamagui'
import EnemyCard from '../Card/components/EnemyCard'
import { EnemyCard as EnemyCardData } from '../Card/types'

interface EnemyRowProps {
  enemies: EnemyCardData[]
}

const EnemyRow: React.FC<EnemyRowProps> = ({ enemies }) => {
  return (
    <Stack flexGrow={1} flexDirection="row" justifyContent="space-evenly" gap="$2">
      {enemies.map((enemy) => (
        <EnemyCard key={enemy.id} enemy={enemy} />
      ))}
    </Stack>
  )
}

export default EnemyRow
