import React, { useState } from "react";
autoComplete = "current-password"
    />
    <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer"
        aria-label={showPassword ? "Hide password" : "Show password"}
    >
        {showPassword ? (
            <EyeSlash size={16} weight="regular" />
        ) : (
            <Eye size={16} weight="regular" />
        )}
    </button>
              </div >
            </div >

    { error && (
        <div
            className="flex items-start gap-2 p-3 bg-error bg-opacity-10 border border-error border-opacity-30 rounded-lg"
            role="alert"
        >
            <Warning
                size={16}
                weight="regular"
                className="text-error mt-0.5 flex-shrink-0"
            />
            <p className="text-xs text-error font-sans">{error}</p>
        </div>
    )}

<button
    type="submit"
    disabled={loading}
    className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-sans font-normal hover:bg-primary-hover transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
>
    {loading ? "Signing in..." : "Sign In"}
</button>
          </form >

    <div className="mt-6 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground font-sans text-center mb-3">
            Acceso rápido — demo:
        </p>
        <div className="grid grid-cols-3 gap-2 mb-3">
            {(["L1", "L2", "Admin"] as UserRole[]).map((role) => (
                <button
                    key={role}
                    onClick={() => quickLogin(role)}
                    className={`py-2 text-xs font-sans font-normal rounded-lg transition-colors duration-150 cursor-pointer ${role === "L1"
                            ? "bg-error text-neutral-50 hover:bg-error"
                            : role === "L2"
                                ? "bg-tertiary text-tertiary-foreground hover:bg-tertiary-hover"
                                : "bg-neutral-700 text-neutral-50 hover:bg-neutral-800"
                        }`}
                >
                    {role === "Admin" ? "Admin" : `Operador ${role}`}
                </button>
            ))}
        </div>
        <button
            onClick={onCitizenMode}
            className="w-full py-2.5 bg-green-600 text-white rounded-lg text-sm font-sans font-medium hover:bg-green-700 transition-colors duration-150 cursor-pointer flex items-center justify-center gap-2"
        >
            <span>📱</span>
            App Ciudadano (Mobile)
        </button>
    </div>
        </div >
      </div >
    </div >
  );
};

export default LoginPage;