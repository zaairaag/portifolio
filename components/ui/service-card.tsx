"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  deliverables: string[];
  icon: React.ReactNode;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="group relative rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-200 hover:border-border"
    >
      {/* Card Header - Sempre visível */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            {service.icon}
          </div>
          <div className="space-y-1 flex-1">
            <h3 className="font-semibold text-lg leading-tight">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border/50" />

      {/* Expandable Content */}
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute -top-[14px] left-1/2 -translate-x-1/2 h-7 px-3 py-0 text-xs bg-background border border-border/50 hover:bg-accent/5"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ChevronDown 
            className={cn(
              "h-3 w-3 transition-transform duration-200",
              isExpanded && "rotate-180"
            )} 
          />
          <span className="ml-1">{isExpanded ? "Ver menos" : "Ver mais"}</span>
        </Button>

        <div
          className={cn(
            "grid transition-all duration-200",
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="p-6 pt-4 space-y-6">
              {/* Descrição Detalhada */}
              <p className="text-sm text-muted-foreground">
                {service.longDescription}
              </p>

              {/* Features em Grid */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium">O que está incluído:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Você receberá:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.deliverables.map((deliverable) => (
                    <div
                      key={deliverable}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
