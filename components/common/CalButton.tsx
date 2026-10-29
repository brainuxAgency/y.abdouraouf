"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"
import { useCal, CAL_LINK, CAL_NAMESPACE } from "@/hooks/use-cal"

export interface CalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
  layout?: "month_view" | "column_view" | "week_view"
  calLink?: string
}

/**
 * Bouton universel déclencheur de réservation Cal.com
 * Au clic, ouvre le modal de prise de rendez-vous en overlay plein écran.
 */
export function CalButton({
  children,
  className = "",
  layout = "month_view",
  calLink = CAL_LINK,
  ...props
}: CalButtonProps) {
  useCal()

  return (
    <button
      type="button"
      data-cal-link={calLink}
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-config={JSON.stringify({ layout })}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

export default CalButton
